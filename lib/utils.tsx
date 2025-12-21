import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getGreeting() {
  const hour = new Date().getHours()

  if (hour < 12) {
    return <>Good <span className="font-medium">Morning ☀️</span></>
  } else if (hour < 18) {
    return <>Good <span className="font-medium">Afternoon 🌤️</span></>
  } else {
    return <>Good <span className="font-medium">Evening 🌙</span></>
  }
}