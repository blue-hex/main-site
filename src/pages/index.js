import React, { useEffect, useRef, useState } from "react"
import HeroSection from "../components/herosection"
import ResearchSection from "../components/researchsection"
import OurServicesSection from "../components/ourservices";
import WhyUsSection from "../components/whyus";
import Logo from "../images/logo-1.png"
import { Helmet } from "react-helmet";
import OurMission from "../components/ourmission";
import ContactUs from "../components/contactus";
import FooterSection from "../components/footer";


export default function Home() {

	const missionRef = useRef();
	const servicesRef = useRef();
	const contactusRef = useRef();
	const techstackRef = useRef();

	const headerRef = useRef();

	const handleRefClick = (ref) => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}

	const [ navOpen, setNavOpen ] = useState(false);

	return (
		<div className="block w-full h-screen block">

			<div onClick={() => handleRefClick(headerRef)} className="fixed bottom-0 right-0 px-3 py-3 mx-3 my-3 rounded-full bg-blue-200 text-gray-500 cursor-pointer" style={{ backdropFilter: 'blur(9px)' }}> 
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"></path></svg>
			</div>

			<Helmet>
				<meta charSet="utf-8" />
				<meta name="description" content="Blue Hex Software focuses on enterprise software development and IT consulting, specializing in CRM,CXM,ERP and Data analytics using AI." />
				<title>Blue Hex Software | AI,CRM,CXM and Data Analytics using AI</title>
				<link rel="canonical" href="http://bluehexsoftware.com" />
			</Helmet>
			{/* Header and Navigation */}
			<div 
				className="hidden md:flex md:w-full md:px-6 md:py-3 md:items-center bg-white md:mb-6 md:mt-3 header" 
				style={{ height: "128px" }} 
				ref={headerRef}
			> 
				<div className="container mx-auto">
					<div className="flex justify-between">
						<span className="inline-flex items-center">
							<img src={Logo} alt="" style={{ width: 90 }} className="m-0 p-0" />
							<span>
								<h1 className="text-xl">Blue Hex Software</h1>
								<p>Enterprise Software Development & IT Consulting</p>
							</span>
						</span>
 
						<span className="relative block">  
							
							<svg onClick={() => setNavOpen(!navOpen)} className="w-6 h-6 iconbtn cursor-pointer hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>

							<ul className={!navOpen ? 'hidden' : 'w-40 absolute mt-3 right-0 bg-gray-100 shadow-xl rounded'}> 
								<li 
								className="flex justify-between items-center px-3 py-3 m-0 hover:text-blue-400 cursor-pointer" 
								onClick={() => handleRefClick(servicesRef)}>
									<span>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
									</span>
									<p className="text-xs">Our Services</p>
								</li>
								<li 
								className="flex justify-between items-center px-3 py-3 m-0 hover:text-blue-400 cursor-pointer"
								onClick={() => handleRefClick(techstackRef)}
								>
									<span>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
									</span>
									<p className="text-xs">Our Techstack</p>
								</li>
								<li 
									className="flex justify-between items-center px-3 py-3 m-0 hover:text-blue-400 cursor-pointer"
									onClick={() => handleRefClick(contactusRef)}
								>
									<span>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
									</span>
									<p className="text-xs">Let's talk!</p>
								</li>
							</ul>
						</span>
					</div>
				</div>
			</div>
			{/* ./header */}

			{/* Mobile Responsive Menu */}
			<div class="md:hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right">
				<div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
					<div class="px-5 pt-4 flex items-center justify-between">
						<div>
							<img class="h-12 w-auto" src={Logo} alt="" />
						</div>
						<div class="-mr-2">
						<button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
							<span class="sr-only">Close main menu</span>
							<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						</div>
					</div>
					<div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
						<div class="px-2 pt-2 pb-3 space-y-1" role="none">
							<div 
								className="flex justify-between items-center px-3 py-3 m-0 hover:text-blue-400 cursor-pointer" 
								onClick={() => handleRefClick(servicesRef)}>
									<span>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
									</span>
									<p className="text-xs">Our Services</p>
								</div>
								<div 
								className="flex justify-between items-center px-3 py-3 m-0 hover:text-blue-400 cursor-pointer"
								onClick={() => handleRefClick(techstackRef)}
								>
									<span>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
									</span>
									<p className="text-xs">Our Techstack</p>
								</div>
								<div 
									className="flex justify-between items-center px-3 py-3 m-0 hover:text-blue-400 cursor-pointer"
									onClick={() => handleRefClick(contactusRef)}
								>
									<span>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
									</span>
									<p className="text-xs">Let's talk!</p>
								</div>
						</div>
					</div>
				</div>
      		</div>

			{/* Hero Section */}
			<HeroSection />
			<ResearchSection />
			<OurServicesSection servicesRef={servicesRef} />
			<WhyUsSection techstackRef={techstackRef} />
			<OurMission missionRef={missionRef} />
			<ContactUs contactusRef={contactusRef} />
			<FooterSection />
		</div> 
		)
	}
	