import { format } from "date-fns";

export enum DateFormat {
  MMM_d_yyyy = "MMM d yyyy",
  dd_MM_yyyy_HH_mm = "dd-MM-yyyy HH:mm",
  yyyy_MM_dd_hh_mm_a = "yyyy-MM-dd hh:mm a",
  "dd/MM/yyyy HH:mm" = "dd/MM/yyyy HH:mm",
  "dd/MM/yyyy" = "dd/MM/yyyy",
  "d MMMM yyyy" = "d MMMM yyyy",
}

/**
 * Format date to local timezone
 * @param date - UTC date string or Date object from API
 * @param fm - Date format enum
 * @returns Formatted date string in local timezone
 */
export const formatDate = (
  date?: Date | string | number | null,
  fm?: DateFormat
) => {
  if (!date) return "-";
  return format(new Date(date), fm ?? DateFormat.MMM_d_yyyy);
};

export const formatCurrency = (
  amount: number = 0,
  currency: string = "USD"
) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
  }).format(amount);
};

export const roundNumber = (
  number: number | string = 0,
  decimalPlaces: number = 2
) => {
  const num = typeof number === "string" ? parseFloat(number) : number;
  return (
    Math.round(num * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces)
  );
};
