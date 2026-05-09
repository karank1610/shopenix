import { Link } from "react-router-dom";

const ContactUsSection = () => {
    return (
        <>
            <div className="contact-us-main py-15 w-full flex justify-center items-center bg-linear-to-r from-blue-500 to-green-500">
                <div className="max-w-400 mx-auto px-40 w-full">
                    <div className="contact-us-content w-full">
                        <div className="title flex flex-col items-center gap-1">
                            <span className="text-3xl text-white">Contact Us</span>
                            <div className="flex items-center gap-2 my-1">
                                <span className="w-8 h-1 bg-gray-300 rounded-full"></span>
                                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                            </div>
                        </div>
                        <div className="content-main flex items-center gap-10 mt-8">
                            <div className="contact-us-form w-[calc(65%-30px)]">
                                <form className="flex flex-col gap-3 w-full text-gray-500">
                                    <div className="flex gap-8 w-full">
                                        <input type="text" placeholder="Full Name" className="bg-white pl-3 h-14 w-[calc(50%-8px)] rounded-md outline-0" />
                                        <input type="email" placeholder="Your Email" className="bg-white pl-3 h-14 w-[calc(50%-8px)] rounded-md outline-0" />
                                    </div>
                                    <div className="flex gap-8 w-full">
                                        <input type="text" placeholder="Your Phone" className="bg-white pl-3 h-14 w-[calc(50%-8px)] rounded-md outline-0" />
                                        <select name="budget" id="" className="bg-white pl-3 h-14 w-[calc(50%-8px)] rounded-md text-gray-500 outline-0">
                                            <option value="Budget Level" disabled selected>Budget Level</option>
                                            <option value="$100 - $500">$100 - $500</option>
                                            <option value="$1000 - $2500">$1000 - $2500</option>
                                            <option value="$2500 - $5000">$2500 - $5000</option>
                                            <option value="$5000 - $10000">$5000 - $10000</option>
                                            <option value="$5000 - $10000">$5000 - $10000</option>
                                            <option value="$10000 or more">$10000 or more</option>
                                        </select>
                                    </div>

                                    <textarea name="message" id="" placeholder="Your Requirements" className="bg-white pl-3 h-32 w-full rounded-md pt-1 outline-0"></textarea>

                                    <div className="message-button pt-5">
                                        <Link to={'/'} className="px-15 py-4.5 text-[15px] tracking-tight text-center align-middle font-semibold text-white capitalize bg-red-600 rounded-4xl hover:bg-black transition">send message</Link>
                                    </div>
                                </form>
                            </div>
                            <div className="map w-[calc(35%-20px)] h-110 flex items-center justify-center">
                                <div className="w-80 h-80 rounded-full overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.123456789!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjciTiA3MsKwNDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUsSection;