import { useState, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
// import justindev from "../public/avatar.png";
// import justindev from "../public/avatars.png";
import justindev from "../public/avatars-transparent.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
	const [delayHasPassed, setDelayHasPassed] = useState(false);
	const [text, count] = useTypewriter({
		words: ["<Developer />", "<Designer />", "Guy-Who-Loves-Coffee.jsx"],
		loop: true,
		delaySpeed: 2000,
	});

	useEffect(() => {
		setTimeout(() => {
			setDelayHasPassed(true);
		}, 2000);
	});

	return (
		<div>
			<div className='text-center p-10'>
				<h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
					Justin Scorzafava
				</h2>

				<div className={delayHasPassed ? "" : "p-6 md:p-[1.65rem]"}>
					{delayHasPassed && (
						<motion.h3
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: "easeOut", duration: 2 }}
							className='text-2xl py-2 md:text-3xl  dark:text-gray-100'
						>
							<span>{text}</span>
							<Cursor cursorColor='#F7ABBA' />
						</motion.h3>
					)}
				</div>

				<p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200'>
					I'm a Web Developer providing services for programming and design content needs.
					Join me below and let's get to it!
				</p>
			</div>
			<div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
				<AiFillGithub />
				<AiFillLinkedin />
				<AiFillYoutube />
			</div>
			<div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
				<Image src={justindev} />
			</div>
		</div>
	);
};

export default Hero;
