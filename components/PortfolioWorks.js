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
				<h3 className='text-3xl py-1'>Portfolio</h3>
				<div>
					<p className='text-md py-2 leading-8 text-gray-800'>
						Since the beginning of my journey as a web developer/designer, I've done
						remote work for
						<span className='text-teal-500'> agencies</span> consulted for{" "}
						<span className='text-teal-500'>local businesses</span> and collaborated
						with talented colleagues to create beautiful websites and mobile
						applications for both business and consumer use.
					</p>
					<p className='text-md py-2 leading-8 text-gray-800'>
						I offer a multitude of services, including programming for both web and
						mobile development.
					</p>
				</div>
				<div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
					<div className='basis-1/3 flex-1'>
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
