import { Crown, Shield, User, type LucideIcon } from "lucide-react";
import type { UserRole } from "@/interface/entities";

export const roleIcons: Record<UserRole, LucideIcon> = {
  user: User,
  admin: Shield,
  super_admin: Crown,
};
