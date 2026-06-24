import type { ColumnDef } from "@tanstack/react-table";

export interface ApiResponse<TData> {
  data: TData[];
  totalCount: number;
}

export interface ApiDataSource<TData> {
  fetchFunction: (
    page: number,
    pageSize: number,
    searchTerm?: string,
  ) => Promise<ApiResponse<TData>>;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  apiDataSource: ApiDataSource<TData>;
  searchPlaceholder?: string;
  enableSearch?: boolean;
  emptyMessage?: string;
  refreshTrigger?: number;
  extraFilters?: React.ReactNode;
}
