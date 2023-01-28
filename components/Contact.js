import React from "react";

const Contact = () => {
	return (
		<section>
			<div>
				<h3>Let's Chat</h3>
				<form action='https://formspree.io/f/xjvdgyoe' method='POST'>
					<div>
						<input type='text' name='name' placeholder='name' />
						<input type='text' name='email' placeholder='email' />
						<textarea name='message' rows='5' placeholder='message' />
					</div>
					<button type='submit'></button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
