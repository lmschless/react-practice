import React from 'react';
import { v4 } from 'uuid';

const NewTicketForm = (props) => {
	function handleNewTicketFormSubmission(event) {
		event.preventDefault();
		console.log(event.target.names.value);
		console.log(event.target.location.value);
		console.log(event.target.issue.value);
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
};

export default NewTicketForm;
