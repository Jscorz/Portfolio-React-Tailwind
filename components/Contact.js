import React from "react";

const Contact = () => {
	return (
		<section className='pb-10'>
			<div className='shadow-lg border border-gray-200 rounded-md p-10 flex flex-col items-center'>
				<h3 className='text-2xl font-medium dark:text-white max-w-[15rem]'>
					I'd Love to Hear from you,<br></br>
					<span className='text-teal-600 font-medium'>
						Get in touch<span className='text-4xl'>👋</span>
					</span>
				</h3>
				<form action='https://formspree.io/f/xjvdgyoe' method='POST'>
					<div className='flex flex-col space-y-2'>
						<input
							className='border border-gray-500 rounded-md mt-4 p-2 text-gray-700 focus:border-teal-600 uppercase w-full'
							type='text'
							name='name'
							placeholder='name'
						/>
						<input
							className='border border-gray-500 rounded-md p-2 text-gray-700 focus:border-teal-600 uppercase'
							type='text'
							name='email'
							placeholder='email'
						/>
						<textarea
							className='border border-gray-500 rounded-md p-2 text-gray-700 focus:border-teal-600 uppercase'
							name='message'
							rows='5'
							placeholder='message'
						/>
					</div>
					<button
						className='uppercase w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white mt-2 px-4 py-2 rounded-md'
						type='submit'
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
