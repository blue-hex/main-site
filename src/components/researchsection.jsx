import React from "react";
import ResearchSectionImage from "../images/1026.jpg";

const ResearchSection = (props) => {
    return (
        <div className="block w-full px-3 py-3 bg-gray-100" style={{ backgroundColor: "#B3E0FF" }}>
            <div className="container mx-auto">
                <div className="grid grid-cols-2">
                    <span className="inline-flex px-3 py-3">
                        <img src={ResearchSectionImage} alt="" />
                    </span>
                    <span className="inline-flex px-3 py-3 flex-col space-y-3 justify-center px-6">
                        <h3 className="text-3xl text-blue-600 text-right">We Research, Design and Develop.</h3>
                        <p className="font-base text-right pl-6 text-blue-900">We're always learning to adapt new technologies and frameworks to reduce development effort for our projects and save costs for our customers. Our team is equipped to handle the rapidly evolving needs of the industry.</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ResearchSection;