import React from "react";
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa";

const Experience = () => {
	return (
		<section className='flex flex-col space-y-3 pt-8 pb-28'>
			<div className='flex items-center py-8'>
				<h1 className='text-gray-900 text-4xl font-bold border-b-2 border-b-teal-700'>
					Experience
				</h1>
			</div>
			<h1 className='text-2xl'>Frontend Developer</h1>
			<div>
				<button className='bg-gray-300 text-gray-600 font-bold p-2 rounded-md'>
					WOMANSDIVORCE
				</button>
			</div>
			<p className='text-gray-700 text-sm'>February/2022 - Present</p>
			<div className='grid grid-cols-10 items-center text-gray-800 py-1'>
				<FaAngleDoubleRight className='text-teal-600 col-start-1 col-span-1'></FaAngleDoubleRight>
				<p className='col-span-9 text-gray-700'>
					Revolutionzed Frontend operations by boosting website perforamnce by a
					substantial 40% through strategic improvements to the Frontend stack
				</p>
			</div>
			<div className='grid grid-cols-10 items-center text-gray-800 py-1'>
				<FaAngleDoubleRight className='text-teal-600 col-start-1 col-span-1'></FaAngleDoubleRight>
				<p className='col-span-9 text-gray-700'>
					Leveraged expertise in responsive web design to craft visually stunning and
					user-friendly websites resulting in increased client acquisition and a boosted
					sales pipeline
				</p>
			</div>
			<div className='grid grid-cols-10 items-center text-gray-800 py-1'>
				<FaAngleDoubleRight className='text-teal-600 col-start-1 col-span-1'></FaAngleDoubleRight>
				<p className='col-span-9 text-gray-700'>
					Optimized clients' web presence and drove organic traffic growth through expert
					implementation of SEO strategies, strategic keyword optimization, and
					utilization of React Helmet
				</p>
			</div>
			<div className='grid grid-cols-10 items-center text-gray-800 py-1'>
				<FaAngleDoubleRight className='text-teal-600 col-start-1 col-span-1'></FaAngleDoubleRight>
				<p className='col-span-9 text-gray-700'>
					Crafted compelling proposals and meticulously developed project schedules for
					multiple website development and maintenance intiatives, ensuring seamless
					execution and delivery
				</p>
			</div>
		</section>
	);
};

export default Experience;
