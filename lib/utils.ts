import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Sunny Acres",
  longName: "Sunny Acres Early Learning",
  city: "Asheville",
  state: "NC",
  phone: "(828) 555-0142",
  phoneHref: "tel:+18285550142",
  email: "hello@sunnyacres.example",
  address: "412 Hillside Lane, Asheville, NC 28801",
  hours: "Mon–Fri · 7:00 AM – 5:30 PM",
  founded: 2013,
  google: { rating: 4.9, count: 147 },
} as const;
