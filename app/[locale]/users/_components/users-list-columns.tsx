"use client";

import Link from "next/link";
import type { TFunction } from "i18next";
import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "@/interface/entities";
import { StatusBadge, RowActions } from "@/components/common";
import { localePath } from "@/lib/locale-path";
import { formatDate } from "@/lib/date";
import { roleLabel } from "@/lib/i18n-options";

export function buildUsersColumns(
  locale: string,
  onDelete: (user: User) => void,
  t: TFunction,
): ColumnDef<User>[] {
  return [
    {
      accessorKey: "name",
      header: t("users.name"),
      cell: ({ row }) => (
        <Link
          href={localePath(locale, `/users/${row.original.id}`)}
          className="font-medium hover:underline"
        >
          {row.original.name}
        </Link>
      ),
    },
    { accessorKey: "email", header: t("users.email") },
    {
      accessorKey: "role",
      header: t("users.role"),
      cell: ({ row }) => (
        <span className="capitalize">{roleLabel(t, row.original.role)}</span>
      ),
    },
    {
      accessorKey: "status",
      header: t("users.status"),
      cell: ({ row }) => <StatusBadge status={row.original.status} />,
    },
    {
      accessorKey: "created_at",
      header: t("users.joined"),
      cell: ({ row }) => formatDate(row.original.created_at),
    },
    {
      id: "actions",
      header: t("users.table.actions"),
      cell: ({ row }) => (
        <RowActions
          viewHref={localePath(locale, `/users/${row.original.id}`)}
          editHref={localePath(locale, `/users/${row.original.id}/edit`)}
          onDelete={() => onDelete(row.original)}
        />
      ),
    },
  ];
}
