import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
// import justindev from "../public/avatar.png";
import justindev from "../public/avatars.png";
// import justindev from "../public/avatars-transparent.png";

const Hero = () => {
	return (
		<div>
			<div className='text-center p-10'>
				<h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
					Justin Scorzafava
				</h2>
				<h3 className='text-2xl py-2 md:text-3xl  dark:text-gray-100'>
					Developer and designer.
				</h3>
				<p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200'>
					Web Developer providing services for programming and design content needs. Join
					me below and let's get to it!
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
