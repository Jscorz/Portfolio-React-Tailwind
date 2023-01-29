import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, toggleDarkMode }) => {
	return (
		<nav className='py-10 mb-12 flex justify-between'>
			<motion.h1
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{
					duration: 1.5,
				}}
				className='text-xl font-burtons dark:text-gray-200'
			>
				JS | Dev
			</motion.h1>
			<motion.ul
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className='flex items-center'
			>
				{!darkMode && (
					<li>
						<BsFillMoonStarsFill
							onClick={toggleDarkMode}
							className='cursor-pointer text-2xl dark:text-gray-200 hover:text-gray-400 transition-all'
						/>
					</li>
				)}
				{darkMode && (
					<li>
						<BsFillSunFill
							onClick={toggleDarkMode}
							className='cursor-pointer text-3xl dark:text-gray-200 dark:hover:text-yellow-400 transition-all'
						/>
					</li>
				)}
				<li>
					<a
						className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
						href='#'
					>
						Resume
					</a>
				</li>
			</motion.ul>
		</nav>
	);
};

export default Navbar;
