import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

const PortfolioCard = () => {
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const isSmall = useMediaQuery("(max-width: 700px)");

	const variants = isSmall
		? {
				initial: { opacity: 0, scale: 0, y: -500 },
				whileInView: { opacity: [0, 1], scale: 1, y: 0 },
				whileHover: { scale: [1, 1.1] },
				transition: { duration: 0.5 },
		  }
		: {
				initial: { opacity: 0, scale: 0, y: -10 },
				whileInView: { opacity: [0, 1], scale: 1, y: 0 },
				whileHover: { scale: [1, 1.1] },
				transition: { duration: 0.5 },
		  };

	return (
		<section>
			<div>
				<h3 className='text-3xl py-1  dark:text-gray-200'>Portfolio</h3>
				<div>
					<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
						Since the beginning of my journey as a web developer/designer, I've done
						remote work for
						<span className='text-teal-500'> agencies</span> consulted for{" "}
						<span className='text-teal-500'>local businesses</span> and collaborated
						with talented colleagues to create beautiful websites and mobile
						applications for both business and consumer use.
					</p>
					<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
						I offer a multitude of services, including programming for both web and
						mobile development.
					</p>
				</div>
				<motion.div
					animate={animateCard}
					transition={{ duration: 0.5, delayChildren: 0.5 }}
					className='flex flex-col gap-10 py-10  lg:flex-row lg:flex-wrap'
				>
					<motion.div
						initial={variants.initial}
						whileInView={variants.whileInView}
						whileHover={variants.whileHover}
						transition={variants.transition}
						className='basis-1/3 flex-1 relative group '
					>
						<div className='-z-20 absolute top-0-left-0 w-full h-full bg-gradient-to-b from-cyan-500/90 to-gray-900/90 text-gray-100 p-4 rounded-md group-hover:z-20 ease-in duration-200 overflow-hidden lg:p-12'>
							<div className='flex flex-col space-y-4 h-full w-full justify-between'>
								<div>
									<h3 className='md: text-lg md:pb-12'>Project Name</h3>
									<h2>
										Here is a description of what the project is and what it
										does
									</h2>
								</div>
								<div className='flex flex-wrap gap-2 justify-self-end'>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>MongoDB</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>Express</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>React</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>Node</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>TailwindCSS</div>
									</span>
								</div>
							</div>
						</div>
						<Image
							src={web1}
							className='rounded-lg object-cover min-h-full'
							width={"100%"}
							height={"100%"}
						/>
					</motion.div>
					<motion.div
						initial={variants.initial}
						whileInView={variants.whileInView}
						whileHover={variants.whileHover}
						transition={variants.transition}
						className='basis-1/3 flex-1 relative group '
					>
						<div className='-z-20 absolute top-0-left-0 w-full h-full bg-gradient-to-b from-cyan-500/90 to-gray-900/90 text-gray-100 p-4 rounded-md group-hover:z-20 ease-in duration-200 overflow-hidden lg:p-12'>
							<div className='flex flex-col space-y-4 h-full w-full justify-between'>
								<div>
									<h3 className='md: text-lg md:pb-12'>Project Name</h3>
									<h2>
										Here is a description of what the project is and what it
										does
									</h2>
								</div>
								<div className='flex flex-wrap gap-2 justify-self-end'>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>MongoDB</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>Express</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>React</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>Node</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>TailwindCSS</div>
									</span>
								</div>
							</div>
						</div>
						<Image
							src={web2}
							className='rounded-lg object-cover min-h-full'
							width={"100%"}
							height={"100%"}
						/>
					</motion.div>
					<motion.div
						initial={variants.initial}
						whileInView={variants.whileInView}
						whileHover={variants.whileHover}
						transition={variants.transition}
						className='basis-1/3 flex-1 relative group '
					>
						<div className='-z-20 absolute top-0-left-0 w-full h-full bg-gradient-to-b from-cyan-500/90 to-gray-900/90 text-gray-100 p-4 rounded-md group-hover:z-20 ease-in duration-200 overflow-hidden lg:p-12'>
							<div className='flex flex-col space-y-4 h-full w-full justify-between'>
								<div>
									<h3 className='md: text-lg md:pb-12'>Project Name</h3>
									<h2>
										Here is a description of what the project is and what it
										does
									</h2>
								</div>
								<div className='flex flex-wrap gap-2 justify-self-end'>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>MongoDB</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>Express</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>React</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>Node</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>TailwindCSS</div>
									</span>
								</div>
							</div>
						</div>
						<Image
							src={web3}
							className='rounded-lg object-cover min-h-full'
							width={"100%"}
							height={"100%"}
						/>
					</motion.div>
					<motion.div
						initial={variants.initial}
						whileInView={variants.whileInView}
						whileHover={variants.whileHover}
						transition={variants.transition}
						className='basis-1/3 flex-1 relative group '
					>
						<div className='-z-20 absolute top-0-left-0 w-full h-full bg-gradient-to-b from-cyan-500/90 to-gray-900/90 text-gray-100 p-4 rounded-md group-hover:z-20 ease-in duration-200 overflow-hidden lg:p-12'>
							<div className='flex flex-col space-y-4 h-full w-full justify-between'>
								<div>
									<h3 className='md: text-lg md:pb-12'>Project Name</h3>
									<h2>
										Here is a description of what the project is and what it
										does
									</h2>
								</div>
								<div className='flex flex-wrap gap-2 justify-self-end'>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>MongoDB</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>Express</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>React</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>Node</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>TailwindCSS</div>
									</span>
								</div>
							</div>
						</div>
						<Image
							src={web4}
							className='rounded-lg object-cover min-h-full'
							width={"100%"}
							height={"100%"}
						/>
					</motion.div>
					<motion.div
						initial={variants.initial}
						whileInView={variants.whileInView}
						whileHover={variants.whileHover}
						transition={variants.transition}
						className='basis-1/3 flex-1 relative group '
					>
						<div className='-z-20 absolute top-0-left-0 w-full h-full bg-gradient-to-b from-cyan-500/90 to-gray-900/90 text-gray-100 p-4 rounded-md group-hover:z-20 ease-in duration-200 overflow-hidden lg:p-12'>
							<div className='flex flex-col space-y-4 h-full w-full justify-between'>
								<div>
									<h3 className='md: text-lg md:pb-12'>Project Name</h3>
									<h2>
										Here is a description of what the project is and what it
										does
									</h2>
								</div>
								<div className='flex flex-wrap gap-2 justify-self-end'>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>MongoDB</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>Express</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>React</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>Node</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>TailwindCSS</div>
									</span>
								</div>
							</div>
						</div>
						<Image
							src={web5}
							className='rounded-lg object-cover min-h-full'
							width={"100%"}
							height={"100%"}
						/>
					</motion.div>
					<motion.div
						initial={variants.initial}
						whileInView={variants.whileInView}
						whileHover={variants.whileHover}
						transition={variants.transition}
						className='basis-1/3 flex-1 relative group '
					>
						<div className='-z-20 absolute top-0-left-0 w-full h-full bg-gradient-to-b from-cyan-500/90 to-gray-900/90 text-gray-100 p-4 rounded-md group-hover:z-20 ease-in duration-200 overflow-hidden lg:p-12'>
							<div className='flex flex-col space-y-4 h-full w-full justify-between'>
								<div>
									<h3 className='md: text-lg md:pb-12'>Project Name</h3>
									<h2>
										Here is a description of what the project is and what it
										does
									</h2>
								</div>
								<div className='flex flex-wrap gap-2 justify-self-end'>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>MongoDB</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>Express</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>React</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>Node</div>
									</span>
									<span className='bg-gray-200 text-gray-900 text-sm p-1 rounded-md flex justify-center items-center md:text-base md:p-2'>
										<div>TailwindCSS</div>
									</span>
								</div>
							</div>
						</div>
						<Image
							src={web6}
							className='rounded-lg object-cover min-h-full'
							width={"100%"}
							height={"100%"}
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default PortfolioCard;
