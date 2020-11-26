import React from "react";

const ContactUs = (props) => {
    return (
        <div className="flex w-full" ref={props.contactusRef}>
            <div className="container mx-auto">
                <div className="px-6 py-6 flex w-full justify-center flex-col items-center">
                    <h3 className="text-3xl">Let's get in touch!</h3>
                    <p className="text-sm font-semibold text-gray-500 my-3">  
                        We can explore on how to make your business grow digitally over a cup of coffee or tea :). 
                    </p>
                    <div className="border-2 rounded-xl border-gray-100 px-6 py-6 bg-gray-50 w-1/3">
                        <form action="https://getform.io/f/baa1af5c-3376-490d-a35d-90ebf0c194d6" method="POST">
                            <div className="space-y-3">
                                <h3 className="text-xl">Write to Us!</h3>
                                <input 
                                    type="text"  
                                    name="fullname" 
                                    className="hover:border-blue-300 hover:shadow-md flex w-full bg-white border rounded shadow-sm border-gray-300 py-1 outline-none px-3 text-base" 
                                    placeholder="Full Name"
                                    required
                                />
                                <input 
                                    type="email" 
                                    name="email" 
                                    className="hover:border-blue-300 hover:shadow-md flex w-full bg-white border rounded shadow-sm border-gray-300 py-1 outline-none px-3 text-base"
                                    placeholder="Email address"
                                    required
                                />
                                <input 
                                    type="number" 
                                    name="phonenumber" 
                                    className="hover:border-blue-300 hover:shadow-md flex w-full bg-white border rounded shadow-sm border-gray-300 py-1 outline-none px-3 text-base"
                                    placeholder="Phone Number"
                                    required
                                />
                                <button 
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150"
                                >Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;