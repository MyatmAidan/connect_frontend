import type { TFunction } from "i18next";

export function statusFilterOptions(t: TFunction, statuses: string[]) {
  return statuses.map((value) => ({
    value,
    label: t(`status.${value}`),
  }));
}

export function roleFilterOptions(t: TFunction, roles: string[]) {
  return roles.map((value) => ({
    value,
    label: t(`roles.${value}`),
  }));
}

export function channelFilterOptions(t: TFunction, channels: string[]) {
  return channels.map((value) => ({
    value,
    label: t(`channels.${value}`),
  }));
}

export function statusLabel(t: TFunction, status: string) {
  return t(`status.${status}`, {
    defaultValue: status.replace(/_/g, " "),
  });
}

export function experienceLevelLabel(t: TFunction, level: string) {
  return t(`experienceLevels.${level}`, {
    defaultValue: level.replace(/_/g, " "),
  });
}

export function employmentTypeLabel(t: TFunction, type: string) {
  return t(`employmentTypes.${type}`, {
    defaultValue: type.replace(/_/g, " "),
  });
}

export function experienceLevelOptions(t: TFunction, levels: string[]) {
  return levels.map((value) => ({
    value,
    label: experienceLevelLabel(t, value),
  }));
}

export function employmentTypeOptions(t: TFunction, types: string[]) {
  return types.map((value) => ({
    value,
    label: employmentTypeLabel(t, value),
  }));
}

export function roleLabel(t: TFunction, role: string) {
  return t(`roles.${role}`, {
    defaultValue: role.replace(/_/g, " "),
  });
}
