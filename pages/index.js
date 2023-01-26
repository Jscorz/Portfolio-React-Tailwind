import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PortfolioWorks from "@/components/PortfolioWorks";

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);

	function toggleDarkMode() {
		setDarkMode(!darkMode);
	}

	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Justin Scorzafava Portfolio</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
				<section className='min-h-screen'>
					<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
					<Hero />
				</section>
				<Services />
				<PortfolioWorks />
			</main>
		</div>
	);
}
