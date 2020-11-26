import React from "react";
import PHP from "../images/php.svg";
import Python from "../images/python.svg";
import JS from "../images/javascript.svg";
import Java from "../images/java.svg";
import Laravel from "../images/laravel.png";
import WordPress from "../images/wordpress.svg"; 
import Django from "../images/django.jpg"; 
import Spring from "../images/spring.png"; 
import ReactJS from "../images/react.svg"; 
import VueJS from "../images/vuejs.png"; 
import ReactNative from "../images/react-native.png"; 
import Flutter from "../images/flutter.png"; 
import Android from "../images/android.svg";
import Xcode from "../images/xcode.svg";
import Firebase from "../images/firebase.png";
import SQL from "../images/sql.svg";
import MicrosoftPowerBI from "../images/power-bi.png";
import SalesForce from "../images/salesforce.png";
import AWS from "../images/aws.png";
import GCP from "../images/gcp.png";
import Azure from "../images/azure.png";
import styled from "@emotion/styled";

const HeroHeader = styled.h3`
    position: relative;

    &:after {
        content: "";
        position: absolute;
        bottom: -12px; 
        background-color: #2250fc;
        width: 5vw;
        height: 3px;
        left: 0;
        right: 0;
        margin: auto;
    }
`;


const WhyUsSection = (props) => { 

    return (
        <div className="block w-full h-full" ref={props.techstackRef}>
            <div className="container mx-auto px-6 py-12 h-full">
                <div className="grid grid-cols-2 grid-rows-1 space-x-6 h-full">
                    <div className="flex flex-col justify-center">
                        <HeroHeader className="text-4xl mb-3">Our Portfolio & Tech Stack</HeroHeader>
                        <span className="space-y-3 mt-6 text-sm leading-tight">
                            <p>
                                We're a team of experienced, passionate and expandable team of developers and domain specialists with a strong background in enterprise software development. 
                            </p>
                            <p>
                                We've successfully implemented NelsonHall-recognised, highly agile CRMs, HRMS and ERP applications along with intelligent data analytics, insightful dashboard applications and data-driven decision making applications for sales, operations and administration teams.
                            </p>
                            <p>
                                We've also worked on deploying tours and travel management CRM and intelligent restaurant management POS systems in south-east Asian countries.
                            </p>
                        </span>
                    </div>
                    <div className="flex flex-col justify-center">
                        {/* <h3>Tech Stack Logos here</h3> */}
                        <div className="grid md:grid-cols-6 grid-cols-1 grid-rows-2 gap-9 space-y-3 pl-16">
                            <div className="flex flex-col items-center justify-center">
                                <img src={PHP} alt="" className="w-full m-0" title="PHP" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={Python} alt="" className="w-full m-0" title="Python" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={JS} alt="" className="w-full m-0" title="JavaScript" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={Java} alt="" className="w-full m-0" title="Java" /> 
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={Laravel} alt="" className="w-full m-0" title="Laravel" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={WordPress} alt="" className="w-full m-0" title="WordPress" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={Django} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={Spring} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={ReactJS} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={VueJS} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={ReactNative} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={Flutter} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={Android} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={Xcode} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={Firebase} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={SQL} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={MicrosoftPowerBI} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={SalesForce} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={AWS} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={GCP} alt="" className="w-full m-0" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={Azure} alt="" className="w-full m-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUsSection;