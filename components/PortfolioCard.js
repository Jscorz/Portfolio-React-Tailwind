import React from "react";

const PortfolioCard = () => {
	return (
		<section>
			<div>
				<h3 className='text-3xl py-1'>Portfolio</h3>
				<div>
					<p className='text-md py-2 leading-8 text-gray-800'>
						Since the beginning of my journey as a web developer/designer, I've done
						remote work for
						<span className='text-teal-500'> agencies</span> consulted for{" "}
						<span className='text-teal-500'>local businesses</span> and collaborated
						with talented colleagues to create beautiful websites and mobile
						applications for both business and consumer use.
					</p>
					<p className='text-md py-2 leading-8 text-gray-800'>
						I offer a multitude of services, including programming for both web and
						mobile development.
					</p>
				</div>
			</div>
		</section>
	);
};

export default PortfolioCard;
