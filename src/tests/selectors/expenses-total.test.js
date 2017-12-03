import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const value = [];
  const result = selectExpensesTotal(value);
  expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
  const value = [expenses[0]];
  const result = selectExpensesTotal(value);
  expect(result).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  const value = 114195;
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(value);
});
