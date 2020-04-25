import React, { Component } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

export default class TicketControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			masterTicketList: [],
			formVisableOnPage: false,
			clickCounter: 0,
			buttonText: 'Create a new ticket',
			currentlyVisibleState: (
				<React.Fragment>
					<h3>Epicodus Help Queue Ticket Submission</h3>
					<p>
						Click below to create a ticket and a teacher will be right over to
						assist!
					</p>
				</React.Fragment>
			)
		};
	}

	onNewTicketCreation = (ticketForm) => {
		this.setState({});
	};

	handleClick = () => {
		if (this.state.clickCounter === 0) {
			this.setState({
				currentlyVisibleState: (
					<p>
						Have you gone through all the steps on the Learn How to Program debugging
						lesson?
					</p>
				)
			});
			this.setState({ buttonText: 'Yes I have reviewed the material.' });
			this.setState({ clickCounter: this.state.clickCounter + 1 });
		}
		if (this.state.clickCounter === 1) {
			this.setState({
				currentlyVisibleState: <p>Have you asked another pair for help?</p>
			});
			this.setState({ buttonText: 'Yes I have asked another pair.' });
			this.setState({ clickCounter: this.state.clickCounter + 1 });
		}
		if (this.state.clickCounter === 2) {
			this.setState({
				currentlyVisibleState: (
					<p>
						Have you spent 15 minutes going through through the problem documenting
						every step?
					</p>
				)
			});
			this.setState({
				buttonText: 'Yes I tried multiple methods to solve the problem.'
			});
			this.setState({ clickCounter: this.state.clickCounter + 1 });
		}
		if (this.state.clickCounter === 3) {
			this.setState({
				currentlyVisibleState: <NewTicketForm />
			});
			this.setState({ buttonText: 'Submit Ticket' });
		}
	};

	render() {
		return (
			<React.Fragment>
				<p>{this.state.currentlyVisibleState}</p>
				<button onClick={this.handleClick}>{this.state.buttonText}</button>
			</React.Fragment>
		);
	}
}
