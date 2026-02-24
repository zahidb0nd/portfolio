import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToElement(id: string) {
  const elementId = id.replace(/^#/, "");
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    // Focus the element to assist screen readers and keyboard users.
    // preventScroll: true prevents the browser from jumping to the element immediately,
    // allowing the smooth scroll to complete naturally while focus is shifted.
    element.setAttribute("tabindex", "-1");
    element.focus({ preventScroll: true });
  }
}
