import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';
import HeroIsoTech from "../images/hero-banner.svg";

const HeroSection = (props) => {

    const typedElement = useRef();

    const options = {
        strings: [
            'you `transform` your business `digitally`.',
            'you earn more smiles from your satisfied customers with our dedicated customer experience management software.',
            'you build a great reputation and drive business growth with our efficient workflow and our experienced team.',
        ],
        typeSpeed: 40,
        backSpeed: 10,
        loop: true,
    }

    useEffect( () => {
        // console.log(typedElement)
        new Typed(typedElement.current, options);
    }, []) 

    return (
        <div className="container mx-auto" style={{ height: `calc(100vh - 170px)` }}>   
            <div className="flex h-full items-center px-6">
                <div className="grid grid-cols-2">
                    <span className="flex flex-col justify-center items-center">
                        <span className="inline-block px-3 align-center"> 
                            <h3 className="text-5xl">We're Blue Hex</h3>
                            <p className="inline-block m-3 ml-0 text-left pr-6 font-base" style={{ height: "120px" }}>
                                We love working on data analytics, CRM, ERP and analytics software. We can help <span className="text-blue-700 font-bold" ref={typedElement}></span>
                            </p>
                        </span>
                    </span>
                    <span className="">
                        <img src={HeroIsoTech} alt="" className="" draggable="false" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;