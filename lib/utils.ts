import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function diffForHumans(date: string) {
  const pastDate = new Date(date.replace(" ", "T"));
  const humanReadable = formatDistanceToNow(pastDate, { addSuffix: true });
  return humanReadable;
}
