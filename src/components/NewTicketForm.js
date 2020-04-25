import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewTicketForm(props) {
	function handleNewTicketFormSubmission(event) {
		event.preventDefault();
		props.onNewTicketCreation({
			names: event.target.names.value,
			location: event.target.location.value,
			issue: event.target.issue.value,
			id: v4()
		});
	}
	return (
		<React.Fragment>
			<form onSubmit={handleNewTicketFormSubmission}>
				<input type="text" name="names" placeholder="Pair Names" />
				<input type="text" name="location" placeholder="Location" />
				<textarea name="issue" placeholder="Describe your issue." />
				<button type="submit">Help!</button>
			</form>
		</React.Fragment>
		// <div>
		// 	<h2>Fill out the form below to submit a help ticket!</h2>
		// 	<h4>Name: ___________</h4>
		// 	<h4>Location: ___________</h4>
		// 	<h4>Issue: __________</h4>
		// </div>
	);
}

NewTicketForm.propTypes = {
	onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
