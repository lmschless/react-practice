import React, { Component } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

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

	handleChangingSelectedTicket = (id) => {
		const selectedTicket = this.state.masterTicketList.filter(
			(ticket) => ticket.id === id // filter ticketlist down to tickets where the id matches the passed in id
		)[0]; // use index 0 because filter returns an array and we just want the first index.
		this.setState({ selectedTicket: selectedTicket });
	};

	handleDeletingTicket = (id) => {
		const newMasterTicketList = this.state.masterTicketList.filter(
			(ticket) => ticket.id !== id
		);
		this.setState({
			masterTicketList: newMasterTicketList,
			selectedTicket: null
		});
	};

	handleClick = () => {
		if (this.state.selectedTicket != null) {
			this.setState({
				formVisibleOnPage: false,
				selectedTicket: null
			});
		} else {
			this.setState((prevState) => ({
				formVisibleOnPage: !prevState.formVisibleOnPage
			}));
		}
	};

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;

		if (this.state.selectedTicket != null) {
			currentlyVisibleState = (
				<TicketDetail
					ticket={this.state.selectedTicket}
					onClickingDelete={this.handleDeletingTicket}
				/>
			);
			buttonText = 'Return to ticket list';
		} else if (this.state.formVisibleOnPage) {
			currentlyVisibleState = (
				<NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
			);
			buttonText = 'Return to ticket list';
		} else {
			currentlyVisibleState = (
				<TicketList
					ticketList={this.state.masterTicketList}
					onTicketSelection={this.handleChangingSelectedTicket} // sending this function to TicketList child component
				/>
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
