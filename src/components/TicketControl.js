import React, { Component } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

export default class TicketControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisableOnPage: false,
			clickCounter: 0,
			buttonText: 'Submit a Ticket',
			currentlyVisibleState: <p>hi</p>
		};
	}

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
