export const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function isBetween(date: string, startDate: string, endDate: string) {
    return startDate <= date && date <= endDate;
}

export function stringifyDate(date: Date): string {
    return date.toISOString().split('T')[0];
}