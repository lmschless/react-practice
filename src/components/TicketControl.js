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

	render() {
		let currentlyVisibleState = null;
		let addTicketButton = null;
		if (this.state.formVisibleOnPage) {
			currentlyVisibleState = <NewTicketForm />;
		} else {
			currentlyVisibleState = <TicketList />;
			addTicketButton = <button onClick={this.handleClick}>Add ticket</button>;
		}
		return (
			<React.Fragment>
				{currentlyVisibleState}
				{addTicketButton}
			</React.Fragment>
		);
	}
}
