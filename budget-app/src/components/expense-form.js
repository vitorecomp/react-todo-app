import React from 'react'

import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

const now = moment();
console.log(now.format('MMM Do, YYYY'))


export default class ExpenseForm extends React.Component {


	constructor(props) {
		super(props)
		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocus: false,
			error: null
		}
	}

	onDescriptionChange = (e) => {
		const description = e.target.value
		this.setState(() => ({
			description
		}))
	}

	onNoteChange = (e) => {
		const note = e.target.value
		this.setState(() => ({
			note
		}))
	}

	onAmountChange = (e) => {
		const amount = e.target.value
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({
				amount
			}))
		}

	}

	onDateChange = (createdAt) => {
		if (!createdAt) {
			return
		}
		this.setState({
			createdAt
		})
	}

	onFocusChange = ({ focused }) => {
		this.setState({
			calendarFocus: focused
		})
	}

	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.description || !this.state.amount) {
			return this.setState(() => ({ error: 'Please provide a description and amount.' }))
		}

		this.setState(() => ({ error: null }))
		this.props.onSubmit({
			description: this.state.description,
			amount: parseFloat(this.state.amount, 10),
			createdAt: this.state.createdAt.valueOf(),
			note: this.state.note
		});
	}

	render() {
		return (
			<div>

				{this.state.error && <p>{this.state.error}</p>}

				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>

					<input
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>

					<SingleDatePicker
						numberOfMonths={1}
						isOutsideRange={() => false}
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocus}
						onFocusChange={this.onFocusChange}
					/>

					<textarea
						placeholder="Add a note for your expense(Optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
					/>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}