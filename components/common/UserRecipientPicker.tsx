"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { getUsersApi } from "@/api/users";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { User } from "@/interface/entities";

interface UserRecipientPickerProps {
  value: string[];
  onChange: (userIds: string[]) => void;
  className?: string;
  label?: string;
  hint?: string;
}

export function UserRecipientPicker({
  value,
  onChange,
  className,
  label,
  hint,
}: UserRecipientPickerProps) {
  const [search, setSearch] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ["users", "notification-recipients", search],
    queryFn: () =>
      getUsersApi({
        search: search || undefined,
        per_page: 50,
        status: "active",
      }),
  });

  const users = data?.data ?? [];

  useEffect(() => {
    setSelectedUsers((current) =>
      current.filter((user) => value.includes(user.id)),
    );
  }, [value]);

  const toggleUser = (user: User) => {
    if (value.includes(user.id)) {
      onChange(value.filter((id) => id !== user.id));
      setSelectedUsers((current) => current.filter((item) => item.id !== user.id));
      return;
    }

    onChange([...value, user.id]);
    setSelectedUsers((current) => [...current, user]);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {label ? <Label>{label}</Label> : null}

      {selectedUsers.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {selectedUsers.map((user) => (
            <Badge key={user.id} variant="secondary" className="gap-1">
              {user.name}
              <button
                type="button"
                className="hover:text-destructive ml-1"
                onClick={() => toggleUser(user)}
                aria-label={`Remove ${user.name}`}
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
      ) : null}

      <div className="relative">
        <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users by name or email..."
          className="pl-9"
        />
      </div>

      <ScrollArea className="h-48 rounded-md border">
        <div className="space-y-1 p-2">
          {isLoading ? (
            <p className="text-muted-foreground p-2 text-sm">Loading users...</p>
          ) : users.length === 0 ? (
            <p className="text-muted-foreground p-2 text-sm">No users found.</p>
          ) : (
            users.map((user) => {
              const selected = value.includes(user.id);

              return (
                <label
                  key={user.id}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2 text-sm transition-colors",
                    selected
                      ? "border-primary bg-primary/5"
                      : "border-transparent hover:bg-muted/50",
                  )}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => toggleUser(user)}
                    className="size-4"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium">{user.name}</span>
                    <span className="text-muted-foreground block truncate text-xs">
                      {user.email}
                      {user.telegram_username ? ` · @${user.telegram_username}` : ""}
                    </span>
                  </span>
                </label>
              );
            })
          )}
        </div>
      </ScrollArea>

      {hint ? <p className="text-muted-foreground text-xs">{hint}</p> : null}
      <p className="text-muted-foreground text-xs">
        {value.length} user{value.length === 1 ? "" : "s"} selected
      </p>
    </div>
  );
}
