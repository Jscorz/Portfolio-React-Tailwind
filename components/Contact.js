import Image from "next/image";
import contactImage from "../public/contact-1.jpg";

const Contact = () => {
	return (
		<section className='pb-5'>
			<div className='shadow-lg border border-gray-200 rounded-md flex justify-center overflow-hidden'>
				<div className='flex flex-col justify-center mx-auto lg:w-[40%]'>
					<div className='p-5 md:p-8 lg:p-12'>
						<h3 className='text-2xl font-medium dark:text-white max-w-[15rem] lg:text-4xl'>
							I'd Love to Hear from you,<br></br>
							<span className='text-gray-400 font-medium'>
								Get in touch<span className='text-4xl text-teal-600'>👋</span>
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
				</div>
				<div className='relative bg-gradient-to-b from-teal-500 overflow-hidden hidden md:flex'>
					<Image src={contactImage} height={500} className='w-full object-cover' />
				</div>
			</div>
		</section>
	);
};

export default Contact;
