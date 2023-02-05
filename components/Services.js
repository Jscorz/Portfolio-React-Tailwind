import React from "react";
import Card from "./Card";

const Services = () => {
	return (
		<section>
			<div>
				<div className='flex items-center py-8'>
					<h1 className='text-gray-900 text-4xl font-bold border-b-2 border-b-teal-700 dark:text-[#f1f1f1]'>
						Services I offer
					</h1>
				</div>
				<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
					Since the beginning of my journey as a web developer/designer, I've done remote
					work for
					<span className='text-teal-500'> agencies</span> consulted for{" "}
					<span className='text-teal-500'>local businesses</span> and collaborated with
					talented colleagues to create beautiful websites and mobile applications for
					both business and consumer use.
				</p>
				<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
					I offer a multitude of services, including programming for both web and mobile
					development.
				</p>
			</div>
			<Card />
		</section>
	);
};

export default Services;
