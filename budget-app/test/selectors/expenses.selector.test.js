import { getVisibleExpenses } from '../../src/selectors/expenses.selectors'
import moment from 'moment'
import expenses from '../fixtures/expense.fixtures'

test('should filter by text value', () => {
	const filters = {
		text: 'e',
		sortBy: 'date',
		startDate: null,
		endDate: null
	}
	const result = getVisibleExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[1]])
})

test('should filter by date value', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: null
	}
	const result = getVisibleExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0]])
})


test('should filter by end date value', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: moment(0)
	}
	const result = getVisibleExpenses(expenses, filters);
	expect(result).toEqual([expenses[0], expenses[1]])
})

test('should sort by date value', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	}
	const result = getVisibleExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should sort by amount value', () => {
	const filters = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
	const result = getVisibleExpenses(expenses, filters);
	expect(result).toEqual([expenses[1], expenses[0], expenses[2]])
})

