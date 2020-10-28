import React from "react"
import Logo from "../images/logo-1.png"

export default function Home() {
  return (
    <div className="block w-full h-screen block bg-gray-100">
		<div className="flex flex-col w-full px-3 py-3 items-center">
			<img src={Logo} alt="" style={{ width: 128 }} />
			<h1 className="text-3xl">Blue Hex Software</h1>
		</div>
    </div>
    )
  }
  