import React from "react";
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa";

const Experience = () => {
	return (
		<section className='flex flex-col space-y-3 py-6'>
			<h1 className='text-2xl'>Frontend Developer</h1>
			<div>
				<button className='bg-gray-300 text-gray-600 font-bold p-2 rounded-md'>
					WOMANSDIVORCE
				</button>
			</div>
			<p className='text-gray-700 text-sm'>February/2022 - Present</p>
			<div className='flex items-center text-gray-800 py-1'>
				<FaAngleDoubleRight className='w-1/4 px-4 text-teal-600'></FaAngleDoubleRight>
				<p>
					Revolutionzed Frontend operations by boosting website perforamnce by a
					substantial 40% through strategic improvements to the Frontend stack
				</p>
			</div>
			<div className='flex items-center text-gray-800 py-1'>
				<FaAngleDoubleRight className='w-1/4 px-4 text-teal-600'></FaAngleDoubleRight>
				<p>
					Leveraged expertise in responsive web design to craft visually stunning and
					user-friendly websites resulting in increased client acquisition and a boosted
					sales pipeline
				</p>
			</div>
			<div className='flex items-center text-gray-800 py-1'>
				<FaAngleDoubleRight className='w-1/4 px-4 text-teal-600'></FaAngleDoubleRight>
				<p>
					Optimized clients' web presence and drove organic traffic growth through expert
					implementation of SEO strategies, strategic keyword optimization, and
					utilization of React Helmet
				</p>
			</div>
			<div className='flex items-center text-gray-800 py-1'>
				<FaAngleDoubleRight className='w-1/4 px-4 text-teal-600'></FaAngleDoubleRight>
				<p>
					Crafted compelling proposals and meticulously developed project schedules for
					multiple website development and maintenance intiatives, ensuring seamless
					execution and delivery
				</p>
			</div>
		</section>
	);
};

export default Experience;
