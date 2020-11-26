import React from "react";

const FooterSection = (props) => {

    let date = new Date();
    let year = date.getFullYear();

    return (
        <div className="flex w-full bg-gray-900">
            <div className="container mx-auto px-6 py-6 text-center">
                <p className="text-white text-sm font-semibold">
                    &copy; {year} Blue Hex Software Private Limited. All rights reserved.
                </p>
            </div>
        </div>
    )
} 

export default FooterSection;