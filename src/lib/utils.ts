import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatHref(href: string): string {
  return href.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
}
