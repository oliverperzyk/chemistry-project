import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @summary Combines component class names.
 * @description Merges conditional classes & resolves conflicting Tailwind utilities.
 */
function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs))
}

export { cn }
