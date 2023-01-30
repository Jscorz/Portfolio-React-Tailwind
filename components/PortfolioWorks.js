import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

const PortfolioCard = () => {
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
				<div className='flex flex-col gap-10 py-10  lg:flex-row lg:flex-wrap'>
					<div className='basis-1/3 flex-1 relative group  hover:scale-110 ease-in duration-200  '>
						<div className='-z-20 absolute top-0-left-0 w-full h-full bg-gradient-to-b from-cyan-500/90 to-gray-900/90 text-gray-100 p-4 rounded-md group-hover:z-20 ease-in duration-200  lg:p-12'>
							<div className='flex flex-col space-y-4 h-full w-full justify-between'>
								<div>
									<h3 className='md: text-lg md:pb-12'>Project Name</h3>
									<h2>
										Here is a description of what the project is and what it
										does
									</h2>
								</div>
								<div className='flex flex-wrap gap-2 justify-self-end'>
									<span className='bg-gray-200 text-gray-900 p-2 rounded-md'>
										HTML
									</span>
									<span className='bg-gray-200 text-gray-900 p-2 rounded-md'>
										CSS
									</span>
									<span className='bg-gray-200 text-gray-900 p-2 rounded-md'>
										JavaScript
									</span>
									<span className='bg-gray-200 text-gray-900 p-2 rounded-md'>
										React
									</span>
									<span className='bg-gray-200 text-gray-900 p-2 rounded-md'>
										TailwindCSS
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
					</div>

					<div className='basis-1/3 flex-1'>
						<Image
							src={web2}
							className='rounded-lg object-cover min-h-full'
							width={"100%"}
							height={"100%"}
						/>
					</div>

					<div className='basis-1/3 flex-1'>
						<Image
							src={web3}
							className='rounded-lg object-cover min-h-full'
							width={"100%"}
							height={"100%"}
						/>
					</div>

					<div className='basis-1/3 flex-1'>
						<Image
							src={web4}
							className='rounded-lg object-cover min-h-full'
							width={"100%"}
							height={"100%"}
						/>
					</div>

					<div className='basis-1/3 flex-1'>
						<Image
							src={web5}
							className='rounded-lg object-cover min-h-full'
							width={"100%"}
							height={"100%"}
						/>
					</div>

					<div className='basis-1/3 flex-1'>
						<Image
							src={web6}
							className='rounded-lg object-cover min-h-full'
							width={"100%"}
							height={"100%"}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioCard;
