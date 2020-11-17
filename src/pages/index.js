import React from "react"
import HeroSection from "../components/herosection"
import Logo from "../images/logo-1.png"

export default function Home() {
	return (
		<div className="block w-full h-screen block py-3">
			{/* Header and Navigation */}
			<div className="flex w-full py-3 items-center container mx-auto">
				<img src={Logo} alt="" style={{ width: 84.21 }} className="m-0 p-0" />
				<span>
					<h1 className="text-3xl">Blue Hex Software</h1>
					<p>Enterprise Software Development & Business IT Consulting</p>
					<ul className="flex space-x-3">
						<li>
							<a className="font-bold uppercase" href="#">Hello</a>
						</li>
						<li>	
							<a href="#">Hello</a>
						</li>
					</ul>
				</span>
			</div>

			{/* Hero Section */}
			<HeroSection />
		</div>
		)
	}
	