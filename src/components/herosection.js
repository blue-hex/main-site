import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';

const HeroSection = (props) => {

    const typedElement = useRef();

    const options = {
        strings: [
            'you `transform` your business `digitally`.',
            'you earn more smiles from your satisfied customers with our dedicated customer experience management software.',
            'you build a great reputation and drive business growth with our efficient workflow and our experienced team.',
        ],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true,
    }

    useEffect( () => {
        console.log(typedElement)
        new Typed(typedElement.current, options);
    }, []) 

    return (
        <div className="container mx-auto">
            <h3 className="text-5xl">We're Blue Hex</h3>
            <p className="w-1/2 ml-2">
                We can help <span className="text-blue-700 font-base" ref={typedElement}></span>
            </p>
        </div>
    )
}

export default HeroSection;