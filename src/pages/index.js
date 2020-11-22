import React from "react"
import HeroSection from "../components/herosection"
import ResearchSection from "../components/researchsection"
import OurServicesSection from "../components/ourservices";
import Logo from "../images/logo-1.png"
import { Helmet } from "react-helmet";

export default function Home() {
	return (
		<div className="block w-full h-screen block">
			<Helmet>
				<meta charSet="utf-8" />
				<meta name="description" content="Blue Hex Software focuses on enterprise software development and IT consulting, specializing in CRM,CXM,ERP and Data analytics using AI." />
				<title>Blue Hex Software | AI,CRM,CXM and Data Analytics using AI</title>
				<link rel="canonical" href="http://bluehexsoftware.com" />
			</Helmet>
			{/* Header and Navigation */}
			<div className="flex w-full py-3 items-center bg-white mb-6 hidden-sm">
				<div className="container mx-auto">
					<div className="flex justify-between">
						<span className="inline-flex items-center">
							<img src={Logo} alt="" style={{ width: 128 }} className="m-0 p-0" />
							<span>
								<h1 className="text-xl">Blue Hex Software</h1>
								<p>Enterprise Software Development & IT Consulting</p>
							</span>
						</span>

						<span className="inline-flex items-center">
							{/* <p>Enterprise Software Development & Business IT Consulting</p> */}
							<ul className="flex space-x-3">
								<li>
									<a href="#">Why Us?</a>
								</li>
								<li>	
									<a href="#">Our Services</a>
								</li>
								<li>	
									<a href="#">Contact Us</a>
								</li>
							</ul>
						</span>
					</div>
				</div>
			</div>

			{/* Hero Section */}
			<HeroSection />
			<ResearchSection />
			<OurServicesSection />
		</div>
		)
	}
	