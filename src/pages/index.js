import React, { useEffect, useRef } from "react"
import HeroSection from "../components/herosection"
import ResearchSection from "../components/researchsection"
import OurServicesSection from "../components/ourservices";
import WhyUsSection from "../components/whyus";
import Logo from "../images/logo-1.png"
import { Helmet } from "react-helmet";
import OurMission from "../components/ourmission";

export default function Home() {

	const missionRef = useRef();

	return (
		<div className="block w-full h-screen block">
			<Helmet>
				<meta charSet="utf-8" />
				<meta name="description" content="Blue Hex Software focuses on enterprise software development and IT consulting, specializing in CRM,CXM,ERP and Data analytics using AI." />
				<title>Blue Hex Software | AI,CRM,CXM and Data Analytics using AI</title>
				<link rel="canonical" href="http://bluehexsoftware.com" />
			</Helmet>
			{/* Header and Navigation */}
			<div className="flex w-full py-3 items-center bg-white mb-6 mt-3 hidden-sm header" style={{ height: "128px" }}> 
				<div className="container mx-auto">
					<div className="flex justify-between">
						<span className="inline-flex items-center">
							<img src={Logo} alt="" style={{ width: 90 }} className="m-0 p-0" />
							<span>
								<h1 className="text-xl">Blue Hex Software</h1>
								<p>Enterprise Software Development & IT Consulting</p>
							</span>
						</span>
					</div>
				</div>
			</div>

			{/* Hero Section */}
			<HeroSection />
			<ResearchSection />
			<OurServicesSection />
			<WhyUsSection />
			<OurMission missionRef={missionRef} />
		</div>
		)
	}
	