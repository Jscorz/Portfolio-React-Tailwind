import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ darkMode, toggleDarkMode }) => {
	return (
		<nav className='py-10 mb-12 flex justify-between'>
			<h1 className='text-xl font-burtons dark:text-gray-200'>JScorzDev</h1>
			<ul className='flex items-center'>
				<li>
					<BsFillMoonStarsFill
						onClick={toggleDarkMode}
						className='cursor-pointer text-2xl dark:text-gray-200'
					/>
				</li>
				<li>
					<a
						className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
						href='#'
					>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
