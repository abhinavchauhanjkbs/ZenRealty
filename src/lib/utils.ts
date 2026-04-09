import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ContactSubmission = {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  phone: string;
  propertyType: string;
  budgetRange: string;
  purpose: string;
  message: string;
};

const STORAGE_KEY = "zen-realty-contact-submissions";

export function getStoredSubmissions(): ContactSubmission[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as ContactSubmission[]) : [];
  } catch {
    return [];
  }
}

export function storeSubmission(submission: ContactSubmission) {
  if (typeof window === "undefined") return;

  const submissions = getStoredSubmissions();
  submissions.unshift(submission);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
}
