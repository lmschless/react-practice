import React, { Component } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

export default class TicketControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisableOnPage: false
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
		if (this.state.formVisibleOnPage) {
			currentlyVisibleState = <NewTicketForm />;
			buttonText = 'Return to Ticket List';
		} else {
			currentlyVisibleState = <TicketList />;
			buttonText = 'Return to Ticket List';
		}
		return (
			<React.Fragment>
				{currentlyVisibleState}
				<button onClick={this.handleClick}>{buttonText}</button>
			</React.Fragment>
		);
	}
}
