"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { useDebouncedCallback } from "use-debounce";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import type { ApiDataSource } from "@/interface/DataTable";
import {
  DEFAULT_TABLE_PAGE_SIZE,
  TABLE_PAGE_SIZE_OPTIONS,
  type TablePageSizeOption,
} from "@/lib/pagination";
import { useTranslation } from "@/hooks/useTranslation";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  apiDataSource: ApiDataSource<TData>;
  searchPlaceholder?: string;
  enableSearch?: boolean;
  emptyMessage?: string;
  refreshTrigger?: number;
  extraFilters?: React.ReactNode;
}

export function DataTable<TData, TValue>({
  columns,
  apiDataSource,
  searchPlaceholder,
  enableSearch = true,
  emptyMessage,
  refreshTrigger = 0,
  extraFilters,
}: DataTableProps<TData, TValue>) {
  const { t, i18n } = useTranslation();
  const resolvedSearchPlaceholder =
    searchPlaceholder ?? t("common.table.searchPlaceholder");
  const resolvedEmptyMessage =
    emptyMessage ?? t("common.table.emptyMessage");
  const [data, setData] = useState<TData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [pageSizeOption, setPageSizeOption] = useState<TablePageSizeOption>(
    DEFAULT_TABLE_PAGE_SIZE,
  );

  const pageSize =
    pageSizeOption === "all" ? Math.max(totalCount, 1) : pageSizeOption;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const { fetchFunction } = apiDataSource;

  const debouncedSetSearch = useDebouncedCallback((term: string) => {
    setDebouncedSearch(term);
    setCurrentPage(1);
  }, 400);

  const fetchData = useCallback(
    async (page: number, search: string) => {
      setLoading(true);
      try {
        const result = await fetchFunction(page, pageSize, search);
        setData(Array.isArray(result.data) ? result.data : []);
        setTotalCount(result.totalCount ?? 0);
      } catch {
        setData([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    },
    [fetchFunction, pageSize],
  );

  useLayoutEffect(() => {
    setCurrentPage(1);
  }, [refreshTrigger, fetchFunction]);

  useEffect(() => {
    void fetchData(currentPage, debouncedSearch);
  }, [currentPage, debouncedSearch, fetchData, refreshTrigger, fetchFunction]);

  // eslint-disable-next-line react-hooks/incompatible-library -- TanStack Table API limitation
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: totalPages,
  });

  const paginationInfo = useMemo(() => {
    if (totalCount === 0) return t("common.table.paginationZero");
    const from = (currentPage - 1) * pageSize + 1;
    const to = Math.min(currentPage * pageSize, totalCount);
    return t("common.table.paginationSummary", { from, to, total: totalCount });
  }, [currentPage, pageSize, totalCount, t]);

  const formatRowsCount = useCallback(
    (count: number) =>
      t("common.table.rowsCount", {
        count,
        defaultValue: `${count} Rows`,
      }),
    [t],
  );

  const formatShowAll = useCallback(
    (total: number) =>
      t("common.table.showAll", {
        total,
        defaultValue: `Show All (${total})`,
      }),
    [t],
  );

  const pageSizeSelectOptions = useMemo(
    () => [
      ...TABLE_PAGE_SIZE_OPTIONS.slice(0, 3).map((size) => ({
        value: String(size),
        label: formatRowsCount(size),
      })),
      { value: "all", label: formatShowAll(totalCount) },
      {
        value: String(TABLE_PAGE_SIZE_OPTIONS[3]),
        label: formatRowsCount(TABLE_PAGE_SIZE_OPTIONS[3]),
      },
    ],
    [formatRowsCount, formatShowAll, totalCount],
  );

  const skeletonRowCount = Math.min(pageSize, 10);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {enableSearch && (
          <div className="relative max-w-sm flex-1">
            <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input
              placeholder={resolvedSearchPlaceholder}
              className="pl-9"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                debouncedSetSearch(e.target.value);
              }}
            />
          </div>
        )}
        {extraFilters}
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id}>
                {group.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: skeletonRowCount }).map((_, i) => (
                <TableRow key={i}>
                  {columns.map((_, j) => (
                    <TableCell key={j}>
                      <Skeleton className="h-4 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-muted-foreground h-24 text-center"
                >
                  {resolvedEmptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground text-sm">{paginationInfo}</p>
        <div className="flex items-center gap-2">
          <Select
            key={`${i18n.language}-${totalCount}`}
            value={String(pageSizeOption)}
            onValueChange={(value) => {
              setPageSizeOption(
                value === "all" ? "all" : (Number(value) as TablePageSizeOption),
              );
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue
                placeholder={formatRowsCount(DEFAULT_TABLE_PAGE_SIZE)}
              />
            </SelectTrigger>
            <SelectContent>
              {pageSizeSelectOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  label={option.label}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage <= 1 || loading}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            <ChevronLeft className="size-4" />
          </Button>
          <span className="text-sm">
            {t("common.table.pageOf", { page: currentPage, total: totalPages })}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage >= totalPages || loading}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
