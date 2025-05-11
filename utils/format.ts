import { formatDistance, differenceInHours, format } from "date-fns";

export const formatMiladiDate = (date: Date): string => {
  const hoursDiff = differenceInHours(new Date(), date);
  if (hoursDiff < 120) {
    return formatDistance(date, new Date(), { addSuffix: true });
  }

  return format(date, "yyyy/MM/dd - HH:mm");
};
