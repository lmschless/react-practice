import React, { Component } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

export default class TicketControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisableOnPage: false,
			masterTicketList: [],
			selectedTicket: null
			// clickCounter: 0,
			// buttonText: 'Create a new ticket',
			// currentlyVisibleState: (
			// 	<React.Fragment>
			// 		<h3>Epicodus Help Queue Ticket Submission</h3>
			// 		<p>
			// 			Click below to create a ticket and a teacher will be right over to
			// 			assist!
			// 		</p>
			// 	</React.Fragment>
			// )
		};
	}

	handleAddingNewTicketToList = (newTicket) => {
		const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
		this.setState({
			masterTicketList: newMasterTicketList,
			formVisibleOnPage: false
		});
	};

	handleClick = () => {
		this.setState((prevState) => ({
			formVisibleOnPage: !prevState.formVisibleOnPage
		}));
	};

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;
		if (this.state.formVisibleOnPage) {
			currentlyVisibleState = (
				<NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
			);
			buttonText = 'Return to ticket list';
		} else {
			currentlyVisibleState = (
				<TicketList ticketList={this.state.masterTicketList} />
			);
			buttonText = 'Add New Ticket';
		}
		return (
			<React.Fragment>
				{currentlyVisibleState}
				{/* {this.state.currentlyVisibleState} */}
				<button onClick={this.handleClick}>{buttonText}</button>
				{/* <button onClick={this.handleClick}>{this.state.buttonText}</button> */}
			</React.Fragment>
		);
	}
}
