import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToElement(id: string) {
  const elementId = id.replace(/^#/, '');
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    element.setAttribute('tabindex', '-1');
    element.focus({ preventScroll: true });
  }
}
