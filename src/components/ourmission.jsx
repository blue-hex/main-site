import React from "react";
import missionBanner from "../images/mission.svg";
import missionVideo from "../images/mission-video.mp4";

const OurMission = (props) => {
    return (
        <div className="flex w-full bg-black h-screen justify-center items-center" ref={props.missionRef}>
            <div className="container mx-auto px-6 py-6">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-gray-100 text-4xl">Why are we in the business?</h3>
                        <div className="w-full">
                            <p className="text-white leading-tight font-semibold mt-6">
                                We're in the business of delivering customer satisfaction and delightful experience, governed by efficiency. Yes, we love efficiency.
                            </p>
                            <p className="text-white leading-tight font-semibold mt-3">
                                We're making a stride to help enterprises of any size grow by taking advantages of digital transformation.
                            </p>
                            <h3 className="text-2xl text-white my-4">Our view on Artificial Intelligence</h3> 
                            <p className="text-white leading-tight font-semibold mt-3">
                                We strongly believe that AI and it's relevant technologies and frameworks can tremendously help in customer satisfaction and drive business growth. Hence we're making it one of our missions to bring high-quality, affordable AI solutions to businesses of all sizes.
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <video src={missionVideo} className="w-full h-full" autoPlay={true} muted loop>
                            <source src={missionVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurMission;