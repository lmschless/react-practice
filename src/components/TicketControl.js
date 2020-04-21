import React, { Component } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

export default class TicketControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisableOnPage: false,
			clickCounter: 0
		};
	}

	handleClick = () => {
		this.setState((prevState) => ({
			formVisibleOnPage: !prevState.formVisibleOnPage
		}));
	};

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;

		if (this.state.clickCounter < 1) {
			currentlyVisibleState = (
				<p>
					Have you gone through all the steps on the Learn How to Program debugging
					lesson?
				</p>
			);
			buttonText = 'Yes I have.';
			this.setState((this.state.clickCounter: 1));
		}
		if (this.state.clickCounter < 2) {
			currentlyVisibleState = <p>Have you asked another pair for help?</p>;
			buttonText = 'Yes I have.';
			this.setState((this.state.clickCounter: 2));
		}
		if (this.state.clickCounter < 3) {
			currentlyVisibleState = (
				<p>
					Have you spent 15 minutes going through through the problem documenting
					every step?
				</p>
			);
			buttonText = 'Yes I have.';
			this.setState((this.state.clickCounter: 3));
		}

		if (this.state.formVisibleOnPage) {
			currentlyVisibleState = <NewTicketForm />;
			buttonText = 'Return to Ticket List';
		} else {
			currentlyVisibleState = <TicketList />;
			buttonText = 'Add Ticket';
		}
		return (
			<React.Fragment>
				{currentlyVisibleState}
				<button onClick={this.handleClick}>{buttonText}</button>
			</React.Fragment>
		);
	}
}
