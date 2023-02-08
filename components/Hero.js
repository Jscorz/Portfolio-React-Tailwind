import { useState, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import justindev from "../public/avatars.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
	const [delayHasPassed, setDelayHasPassed] = useState(false);
	const [text, count] = useTypewriter({
		words: ["Full-Stack Developer", "Web Designer", "Guy Who Loves Coffee"],
		loop: true,
		delaySpeed: 2000,
	});

	useEffect(() => {
		setTimeout(() => {
			setDelayHasPassed(true);
		}, 2000);
	});

	return (
		<div className='lg:flex lg:items-center lg:justify-center lg:py-10'>
			<div className='text-center px-10 lg:flex lg:flex-col lg:items-start lg:text-left lg:translate-x-20 xl:translate-x-44'>
				<h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl lg:text-7xl lg:max-w-2xl'>
					Hi, I'm Justin Scorzafava
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
							<Cursor cursorColor='#00897B' />
						</motion.h3>
					)}
				</div>

				<p className='text-md pt-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200 lg:mx-0 lg:text-left'>
					I'm a Web Developer providing services for programming and design content needs.
					Join me below and let's get to it!
				</p>
				<div className='text-5xl flex justify-center gap-16 py-6 text-gray-600'>
					<a
						className='hover:text-teal-600 transition-all'
						target='_blank'
						href='https://github.com/Jscorz'
					>
						<AiFillGithub />
					</a>
					<a
						className='hover:text-teal-600 transition-all'
						target='_blank'
						href='https://www.linkedin.com/in/justin-scorzafava'
					>
						<AiFillLinkedin />
					</a>
					<Link
						to='contact'
						spy={true}
						smooth={true}
						offset={-100}
						duration={500}
						className='hover:text-teal-600 transition-all'
					>
						<AiFillMail />
					</Link>
				</div>
			</div>

			<div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96'>
				<Image src={justindev} />
			</div>
		</div>
	);
};

export default Hero;
