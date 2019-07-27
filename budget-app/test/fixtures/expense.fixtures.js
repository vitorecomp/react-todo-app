import moment from 'moment'
export default [{
	id: 1,
	description: 'Gun',
	note: '',
	amount: 195,
	createdAt: 0
}, {
	id: 2,
	description: 'Rent',
	note: '',
	amount: 196,
	createdAt: moment(0).subtract(4, 'day').valueOf()
}, {
	id: 3,
	description: 'Credit',
	note: '',
	amount: 190,
	createdAt: moment(0).add(4, 'day').valueOf()
}]