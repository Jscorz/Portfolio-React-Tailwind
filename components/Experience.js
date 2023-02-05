import React from "react";
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa";

const Experience = () => {
	return (
		<section className='flex flex-col space-y-4 pt-8 pb-28 md:space-y-6'>
			<div className='flex items-center py-8'>
				<h1 className='text-gray-900 text-4xl font-bold border-b-2 border-b-teal-700 dark:text-[#f1f1f1]'>
					Experience
				</h1>
			</div>
			<h1 className='text-2xl dark:text-[#f1f1f1]'>Frontend Developer</h1>
			<div>
				<span className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold p-2 rounded-md'>
					WOMANSDIVORCE
				</span>
			</div>
			<p className='text-gray-700 text-sm dark:text-gray-200'>February/2022 - Present</p>
			<div className='grid grid-cols-10 items-center text-gray-800 py-1'>
				<FaAngleDoubleRight className='text-teal-600 col-start-1 col-span-1'></FaAngleDoubleRight>
				<p className='col-span-9 text-gray-700 dark:text-gray-200'>
					Revolutionzed Frontend operations by boosting website perforamnce by a
					substantial 40% through strategic improvements to the Frontend stack
				</p>
			</div>
			<div className='grid grid-cols-10 items-center text-gray-800 py-1'>
				<FaAngleDoubleRight className='text-teal-600 col-start-1 col-span-1'></FaAngleDoubleRight>
				<p className='col-span-9 text-gray-700 dark:text-gray-200'>
					Leveraged expertise in responsive web design to craft visually stunning and
					user-friendly websites resulting in increased client acquisition and a boosted
					sales pipeline
				</p>
			</div>
			<div className='grid grid-cols-10 items-center text-gray-800 py-1'>
				<FaAngleDoubleRight className='text-teal-600 col-start-1 col-span-1'></FaAngleDoubleRight>
				<p className='col-span-9 text-gray-700 dark:text-gray-200'>
					Optimized clients' web presence and drove organic traffic growth through expert
					implementation of SEO strategies, strategic keyword optimization, and
					utilization of React Helmet
				</p>
			</div>
			<div className='grid grid-cols-10 items-center text-gray-800 py-1'>
				<FaAngleDoubleRight className='text-teal-600 col-start-1 col-span-1'></FaAngleDoubleRight>
				<p className='col-span-9 text-gray-700 dark:text-gray-200'>
					Crafted compelling proposals and meticulously developed project schedules for
					multiple website development and maintenance intiatives, ensuring seamless
					execution and delivery
				</p>
			</div>
		</section>
	);
};

export default Experience;
