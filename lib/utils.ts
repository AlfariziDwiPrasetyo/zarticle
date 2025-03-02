import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";
import xss from "xss";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function diffForHumans(date: Date) {
  const pastDate = new Date(date);
  const humanReadable = formatDistanceToNow(pastDate, { addSuffix: true });
  return humanReadable;
}

export function sanitizedContent(content: string) {
  return xss(content);
}
