import { DATE_UNIT_TYPES } from './constants';
import {
  getYear,
  addDays,
  addWeeks,
  addMonths,
  addYears,
  isWithinInterval,
  isBefore,
  isSameDay,
} from 'date-fns';

export function getCurrentYear(): number {
  return getYear(new Date());
}

export function add(
  date: Date,
  number: number,
  type: DATE_UNIT_TYPES = DATE_UNIT_TYPES.DAYS,
): Date {
  switch (type) {
    case DATE_UNIT_TYPES.DAYS:
      return addDays(date, number);
    case DATE_UNIT_TYPES.WEEKS:
      return addWeeks(date, number);
    case DATE_UNIT_TYPES.MONTHS:
      return addMonths(date, number);
    case DATE_UNIT_TYPES.YEARS:
      return addYears(date, number);
    default:
      return date;
  }
}

export function isWithinRange(date: Date, from: Date, to: Date): boolean {
  return isWithinInterval(date, { start: from, end: to });
}

export function isDateBefore(date: Date, compareDate: Date): boolean {
  return isBefore(date, compareDate);
}

export function issameDay(date: Date, compareDate: Date): boolean {
  return isSameDay(date, compareDate);
}
