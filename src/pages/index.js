import React from "react"
import Logo from "../images/logo-1.png"

export default function Home() {
	return (
		<div className="block w-full block bg-gray-300 py-3">
			<div className="flex w-full px-3 py-3 items-center container mx-auto">
				<img src={Logo} alt="" style={{ width: 128 }} className="m-0" />
				<span>
					<h1 className="text-3xl">Blue Hex Software</h1>
					<p>Enterprise Software Development & Business IT Consulting</p>
				</span>
			</div>
		</div>
		)
	}
	