import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { motion } from "framer-motion";

const Card = () => {
	return (
		<div className='lg:flex gap-10'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				whileHover={{ scale: 1.1 }}
				transition={{ duration: 1.0, type: "tween" }}
				key={1}
				className='text-center shadow-lg p-10 rounded-xl my-10 flex flex-col items-center dark:bg-white'
			>
				<Image src={design} height={100} width={100} />
				<h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
				<p className='py-2 md:max-w-md'>
					Creating elegant designs suited for your design theory.
				</p>
				<h4 className='py-4 text-teal-600'>Design tools I use</h4>
				<p className='text-gray-800 py-1'>Figma</p>
				<p className='text-gray-800 py-1'>Photoshop</p>
				<p className='text-gray-800 py-1'>Illustrator</p>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				whileHover={{ scale: 1.1 }}
				transition={{ duration: 1.0, type: "tween" }}
				key={2}
				className='text-center shadow-lg p-10 rounded-xl my-10 flex flex-col items-center dark:bg-white'
			>
				<Image src={code} height={100} width={100} />
				<h3 className='text-lg font-medium pt-8 pb-2'>Consulting</h3>
				<p className='py-2 md:max-w-md'>
					Crafting a plan with clients to bring beautiful websites and mobile applications
					to life.
				</p>
				<h4 className='py-4 text-teal-600'>Programming technologies I use</h4>
				<p className='text-gray-800 py-1'>HTML</p>
				<p className='text-gray-800 py-1'>CSS</p>
				<p className='text-gray-800 py-1'>Javascript</p>
				<p className='text-gray-800 py-1'>React</p>
				<p className='text-gray-800 py-1'>Next</p>
				<p className='text-gray-800 py-1'>TailwindCSS</p>
				<p className='text-gray-800 py-1'>Node</p>
				<p className='text-gray-800 py-1'>Express</p>
				<p className='text-gray-800 py-1'>NoSQL(MongoDB)</p>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				whileHover={{ scale: 1.1 }}
				transition={{ duration: 1.0, type: "tween" }}
				key={3}
				className='text-center shadow-lg p-10 rounded-xl my-10 flex flex-col items-center dark:bg-white'
			>
				<Image src={consulting} height={100} width={100} />
				<h3 className='text-lg font-medium pt-8 pb-2'>Consulting</h3>
				<p className='py-2 md:max-w-md'>
					Crafting a plan with clients to bring beautiful websites and mobile applications
					to life.
				</p>
				<h4 className='py-4 text-teal-600'>Programming technologies I use</h4>
				<p className='text-gray-800 py-1'>HTML</p>
				<p className='text-gray-800 py-1'>CSS</p>
				<p className='text-gray-800 py-1'>Javascript</p>
				<p className='text-gray-800 py-1'>React</p>
				<p className='text-gray-800 py-1'>Next</p>
				<p className='text-gray-800 py-1'>TailwindCSS</p>
				<p className='text-gray-800 py-1'>Node</p>
				<p className='text-gray-800 py-1'>Express</p>
				<p className='text-gray-800 py-1'>NoSQL(MongoDB)</p>
			</motion.div>
		</div>
	);
};

export default Card;
