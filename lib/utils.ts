import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function diffForHumans(date: Date) {
  const pastDate = new Date(date);
  const humanReadable = formatDistanceToNow(pastDate, { addSuffix: true });
  return humanReadable;
}
