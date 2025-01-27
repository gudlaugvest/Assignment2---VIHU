import {describe, expect, it} from 'vitest';
import {getCurrentYear, add, isWithinRange, isDateBefore, isSameDay} from '../dateUtils';
import { DATE_UNIT_TYPES } from '../constants';

// GREEN PHASE
describe("GREEN PHASE", () => {

  // getCurrentYear
  describe("getCurrentYear", () => {
    it('returns the current year', () => {
      const year = getCurrentYear();
      expect(year).toBe(new Date().getFullYear()); // 2024
    });
  });

  // add
  describe("add", () => {
    it('adds a number of days to a date', () => {
      const date = new Date(2024, 0, 1);
      const newDate = add(date, 10, DATE_UNIT_TYPES.DAYS); // 10 days after January 1, 2024
      expect(newDate).toStrictEqual(new Date(2024, 0, 11)); // January 11, 2024
    });

    it('correctly adds days over February in a leap year', () => {
      const date = new Date(2024, 1, 28);
      const newDate = add(date, 1, DATE_UNIT_TYPES.DAYS); // 1 day after February 28, 2024
      expect(newDate).toStrictEqual(new Date(2024, 1, 29)); // February 29, 2024
    });

    it('handles month transition when adding days', () => {
      const date = new Date(2024, 0, 25);
      const newDate = add(date, 10, DATE_UNIT_TYPES.DAYS); // 10 days after January 25, 2024
      expect(newDate).toStrictEqual(new Date(2024, 1, 4)); // February 4, 2024
    });

    it('add two months to a date', () => {
      const date = new Date(2024, 0, 1);
      const newDate = add(date, 2, DATE_UNIT_TYPES.MONTHS); // 2 months after January 1, 2024
      expect(newDate).toStrictEqual(new Date(2024, 2, 1)); // March 1, 2024
    });

    it('add 1 year to a date', () => {
      const date = new Date(2023, 0, 1);
      const newDate = add(date, 1, DATE_UNIT_TYPES.YEARS); // 1 year after January 1, 2023
    });

  });


  // isWithinRange
  describe("isWithinRange", () => {
    it('checks if a date is within a range', () => {
      const date = new Date(2024, 0, 4); // January 4, 2024, a date within the range
      const from = new Date(2024, 0, 1); // January 1, 2024, start of the range
      const to = new Date(2024, 0, 10); // January 10, 2024, end of the range
      const result = isWithinRange(date, from, to);
      expect(result).toBe(true);
    });
  
    it('checks if February 29 in a leap year is within a range that spans multiple months', () => {
      const date = new Date(2024, 1, 29);
      const from = new Date(2024, 0, 1); 
      const to = new Date(2024, 2, 31); 
      const result = isWithinRange(date, from, to);
      expect(result).toBe(true);
    });

  });

  // isDateBefore
  describe("isDateBefore", () =>  {
    it('checks if a date is before another date', () => {
      const date = new Date(2024, 0, 4); // January 4, 2024
      const compareDate = new Date(2024, 0, 10); // January 10, 2024
      const result = isDateBefore(date, compareDate);
      expect(result).toBe(true);
    });
  });

  // isSameDay
  describe("isSameDay", () => {
    it('checks if two dates are the same day', () => {
      const date = new Date(2024, 0, 4); // January 4, 2024
      const compareDate = new Date(2024, 0, 4); // January 4, 2024
      const result = isSameDay(date, compareDate);
      expect(result).toBe(true);
    });
  });

});


// RED PHASE
describe("RED PHASE", () => {
   // getCurrentYear
   describe("getCurrentYear", () => {
    it('returns the current year', () => {
      const year = getCurrentYear();
      expect(year).not.toBe(new Date(1994));
    });
  });

  // add
  describe("add", () => {
    it('adds a number of days to a date', () => {
      const date = new Date(2024, 0, 1);
      const newDate = add(date, 10);
      expect(newDate).not.toBe(new Date(2024, 0, 11));
    });

    it('adds a number of days to a date', () => {
      const date = new Date(2024, 0, 1);
      const newDate = add(date, -1);
      expect(newDate).not.toBe(new Date(2024, 0, 11));
    });
  });


  // isWithinRange
  describe("isWithinRange", () => {
    it('checks if a date is within a range', () => {
      const date = new Date(2024, 0, 4); // 2024-01-04, a date within the range
      const from = new Date(2024, 0, 1); // 2024-01-01, start of the range
      const to = new Date(2024, 0, 10); // 2024-01-10, end of the range
      const result = isWithinRange(date, from, to);
      expect(result).not.toBe(false);
    });

    it('checks if a date is within a range', () => {
      const date = new Date(2024, 0, 30); // 2024-01-30, a date within the range
      const from = new Date(2024, 0, 1); // 2024-01-01, start of the range
      const to = new Date(2024, 0, 10); // 2024-01-10, end of the range
      const result = isWithinRange(date, from, to);
      expect(result).not.toBe(true);
    });

  });

  // isDateBefore
  describe("isDateBefore", () =>  {
    it('checks if a date is before another date', () => {
      const date = new Date(2024, 0, 4); // 2024-01-04
      const compareDate = new Date(2024, 0, 10); // 2024-01-10
      const result = isDateBefore(date, compareDate);
      expect(result).not.toBe(false);
    });

    it('checks if a date is before another date', () => {
      const date = new Date(2024, 0, 10); // 2024-01-04
      const compareDate = new Date(2024, 0, 10); // 2024-01-10
      const result = isDateBefore(date, compareDate);
      expect(result).not.toBe(true);
    });
  });


  // isSameDay
  describe("isSameDay", () => {
    it('checks if two dates are the same day', () => {
      const date = new Date(2024, 0, 4); // 2024-01-04
      const compareDate = new Date(2024, 0, 4); // 2024-01-04
      const result = isSameDay(date, compareDate);
      expect(result).not.toBe(false);
    });

    it('checks if two dates are the same day', () => {
      const date = new Date(2024, 0, 10); // 2024-01-04
      const compareDate = new Date(2024, 0, 4); // 2024-01-04
      const result = isSameDay(date, compareDate);
      expect(result).not.toBe(true);
    });
  });


});
