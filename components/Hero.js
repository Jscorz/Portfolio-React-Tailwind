import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import justindev from "../public/wave.png";

const Hero = () => {
	return (
		<div>
			<div className='text-center p-10'>
				<h2 className='text-5xl py-2 text-teal-600 font-medium'>Justin Scorzafava</h2>
				<h3 className='text-2xl py-2'>Developer and designer.</h3>
				<p className='text-md py-5 leading-8 text-gray-800'>
					Web Developer providing services for programming and design content needs. Join
					me below and let's get to it!
				</p>
			</div>
			<div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
				<AiFillGithub />
				<AiFillLinkedin />
				<AiFillYoutube />
			</div>
			<div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20'>
				<Image src={justindev} layout='fill' objectFit='cover' />
			</div>
		</div>
	);
};

export default Hero;
