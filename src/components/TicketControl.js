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
		let currentlyVisableState = null;
		if (this.state.formVisibleOnPage) {
			currentlyVisibleState = <NewTicketForm />;
		} else {
			currentlyVisibleState = <TicketList />;
		}
		return <React.Fragment>{currentlyVisibleState}</React.Fragment>;
	}
}
