import React from "react";
import CRMIcon from "../images/crm.svg"; 
import TechBG from "../images/19366.jpg"; 
import AI from "../images/ai.svg"; 
import CustomerReview from "../images/customer-review.svg"; 
import AppDevelopment from "../images/app-development.svg"; 
import UI from "../images/layout.svg"; 
import POS from "../images/bill.svg"; 
import HR from "../images/hiring.svg"; 
import styled from "@emotion/styled";



const HeroHeader = styled.h3`

    position: relative;
    text-align: center;

    &:before {
        content: "";
        position: absolute;
        background-color: #2250fc;
        width: 5vw;
        height: 2px;
        margin: auto;
        left: 0;
        right: 0;
        bottom: -21px; 
    }
`;

const OurServices = (props) => {
    return (
        <div className="block w-full h-full overflow-scroll" ref={props.servicesRef} style={{ 
            // backgroundImage: `url(${TechBG})`, 
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="container mx-auto px-6 pt-3 pb-6">
                <div className="block my-12 text-center">
                    <HeroHeader className="text-3xl">Our Services</HeroHeader>
                </div>

                <div className="grid grid-rows-1 grid-cols-3 space-x-3">
                    <div className="inline-flex flex-col items-center px-6 py-6 space-y-3 bg-purple-500 text-white shadow-xl rounded-xl">
                        <img src={CustomerReview} alt="CRM/CXM" className="w-12 h-12 m-0" />
                        <h3 className="text-xl text-white">CRM & CXM</h3>
                        <p className="text-sm text-center">
                            Customer engagement and experience management. AI-powered customer experience management suites. SalesForce implementation, management and development.
                        </p>
                    </div>
                    <div className="inline-flex flex-col items-center px-6 py-6 space-y-3 bg-white border-2 border-purple-500 shadow-xl rounded-xl">
                        <img src={AppDevelopment} alt="App Development" className="w-12 h-12 m-0" />
                        <h3 className="text-xl">App Development</h3>
                        <p className="text-sm text-center">
                            Enterprise applications development, Android and iOS app development, real-time app development, Microsoft .NET applications development and native macOS app development.
                        </p>
                    </div>
                    <div className="inline-flex flex-col items-center px-6 py-6 space-y-3 bg-blue-500 text-white shadow-xl rounded-xl">
                        <img src={CustomerReview} alt="CRM/CXM" className="w-12 h-12 m-0" />
                        <h3 className="text-xl text-white text-center">BlueSense SXM</h3>
                        <p className="text-sm text-center">
                            Omnichannel Service Experience Management suite with out-of-box support for WordPress, Drupal, Android, iOS and many other frameworks. All-in-one support and service management for businesses of any size.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 space-x-3 my-6"> 
                    <div className="inline-flex flex-col items-center px-6 py-6 space-y-3 bg-blue-500 text-white shadow-xl rounded-xl">
                        <img src={CustomerReview} alt="CRM/CXM" className="w-12 h-12 m-0" />
                        <h3 className="text-xl text-white">BlueSparks AI</h3>
                        <p className="text-sm text-center">
                            Discover insights, drive business growth with our data-driven decision making models and orchestrate workflow using predictive models and AI autopilot models.
                        </p>
                    </div>
                    <div className="inline-flex flex-col items-center px-6 py-6 space-y-3 bg-green-500 text-white shadow-xl rounded-xl">
                        <img src={AppDevelopment} alt="App Development" className="w-12 h-12 m-0" />
                        <h3 className="text-xl text-white">POSX Resto-ERP</h3>
                        <p className="text-sm text-center">
                            Intelligent Restaurant Inventory Management and cloud-based point-of-sale for growing enterprises. Take advantage of our SAAS-based subscription model to transform your business without burning a hole in the budget.
                        </p>
                    </div>
                    <div className="inline-flex flex-col items-center px-6 py-6 space-y-3 border-2 border-indigo-500 text-indigo-500 shadow-xl rounded-xl">
                        <img src={CustomerReview} alt="CRM/CXM" className="w-12 h-12 m-0" />
                        <h3 className="text-xl text-indigo-500 text-center">Chronos HXM</h3>
                        <p className="text-sm text-center">
                            Agile Hiring Experience & On-boarding management suite for growing firms and HR firms to rapidly onboard resources with precise job-description-to-resume match using our AI solution and provide streamlined on-boarding experience.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OurServices;