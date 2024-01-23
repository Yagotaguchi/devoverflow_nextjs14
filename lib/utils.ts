import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const elapsedMilliseconds: number = now.getTime() - createdAt.getTime();
  const seconds = Math.floor(elapsedMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (years >= 1) {
    return rtf.format(-years, "year");
  } else if (months >= 1) {
    return rtf.format(-months, "month");
  } else if (weeks >= 1) {
    return rtf.format(-weeks, "week");
  } else if (days >= 1) {
    return rtf.format(-days, "day");
  } else if (hours >= 1) {
    return rtf.format(-hours, "hour");
  } else if (minutes >= 1) {
    return rtf.format(-minutes, "minute");
  } else {
    return rtf.format(-seconds, "second");
  }
};

export const formatAndDivideNumber = (value: number): string => {
  if (value >= 1e6) {
    return (value / 1e6).toFixed(1) + "M";
  } else if (value >= 1e3) {
    return (value / 1e3).toFixed(1) + "K";
  } else {
    return value.toString();
  }
};
