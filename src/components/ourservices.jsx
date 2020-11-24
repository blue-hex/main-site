import React from "react";
import CRMIcon from "../images/crm.svg"; 
import TechBG from "../images/19366.jpg"; 
import AI from "../images/ai.svg"; 
import CustomerReview from "../images/customer-review.svg"; 
import AppDevelopment from "../images/app-development.svg"; 
import UI from "../images/layout.svg"; 
import POS from "../images/bill.svg"; 
import HR from "../images/hiring.svg"; 

const OurServices = (props) => {
    return (
        <div className="block w-full" style={{ 
            backgroundImage: `url(${TechBG})`, 
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="container mx-auto px-3 pt-3 pb-6">
                <div className="block my-3 text-center">
                    <h3 className="text-2xl">Our Services</h3>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <div className="card block rounded-2xl shadow-2xl border-b px-6 py-6">
                        <div className="flex flex-col w-full items-center space-y-2">
                            <img src={CustomerReview} alt="" className="w-12 h-12 m-0" />
                            <h3 className="font-bold text-center">CRM & CXM</h3>
                            <p className="text-xs text-left">Our solutions ranges from custom-tailored CRM/CXM to bringing the entire customer satisfaction processes onto Salesforce, Zendesk or similar tools.</p>
                        </div>
                    </div>
                    <div className="card block rounded-2xl shadow-2xl border-b px-6 py-6">
                        <div className="flex flex-col w-full items-center space-y-2">
                            <img src={AppDevelopment} alt="" className="w-12 h-12 m-0" />
                            <h3 className="font-bold text-center">Enterprise App Development & Cloud Consulting</h3>
                            <p className="text-xs text-left">Our team delivers advanced applications to manage your B2B, B2C and internal business processes. We love to work with web apps, mobile apps, big data apps and iOS/macOS apps development. We can also help your business go cloud with our dedicated experience in Amazon AWS, Google Cloud Platform and Azure.</p>
                        </div>
                    </div>
                    <div className="card block rounded-2xl shadow-2xl border-b px-6 py-6">
                        <div className="flex flex-col w-full items-center space-y-2">
                            <img src={UI} alt="" className="w-12 h-12 m-0" />
                            <h3 className="font-bold text-center">UI/UX, Web Design & E-Commerce</h3>
                            <p className="text-xs text-left">We love to help your brand go online with our years of experience in WooCommerce and Magento along with delightful UI and highly functional UX.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-6">
                    <div className="card block rounded-2xl shadow-2xl border-b  px-6 py-6">
                        <div className="flex flex-col w-full items-center space-y-3">
                            <img src={AI} alt="" className="w-12 h-12 m-0" />
                            <h3 className="font-bold text-center">Data Analytics & AI, ML and BI</h3>
                            <p className="text-xs text-left">We can help drive your business growth using data analytics, pre-processing input datasets required for machine learning models and implement Microsoft Power BI into your firm's existing systems as microservice architecture.</p>
                        </div>
                    </div>
                    
                    <div className="card block rounded-2xl shadow-2xl border-b px-6 py-6">
                        <div className="flex flex-col w-full items-center space-y-2">
                            <img src={POS} alt="" className="w-12 h-12 m-0" />
                            <h3 className="font-bold">Point-of-Sale ERP</h3>
                            <p className="text-xs text-left">Our team has developed next generation, SAAS-based point-of-sale system for retail and restaurants which enables enterprises of any size to go digital effordably. </p>
                        </div>
                    </div>
                    
                    <div className="card block rounded-2xl shadow-2xl border-b px-6 py-6">
                        <div className="flex flex-col w-full items-center space-y-2">
                            <img src={HR} alt="" className="w-12 h-12 m-0" />
                            <h3 className="font-bold text-center">Hiring & On-boarding Management Suite</h3>
                            <p className="text-xs text-left">Our team is working on intelligent hiring and onboarding experience management suite for firms to efficiently manage talent, onboard employees quickly and measure performance of HR department with ease. Talent data is the new Oil! Get onboard with our HXM ( Hiring eXperience Management) suite and witness exponential growth. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;