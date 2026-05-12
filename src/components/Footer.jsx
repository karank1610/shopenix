import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer-main py-15 w-full bg-linear-to-r from-[#434343] to-black flex justify-center items-center">
                <div className="max-w-400 mx-auto px-40 w-full">
                    <div className="footer-top"></div>
                    <div className="footer-center my-5 border-b border-[rgba(255,255,255,0.1)] pb-10">
                        <div className="center-inner flex items-start justify-start gap-10 text-white">
                            <div className="footer-column w-[calc(45%-30px)]">
                                <div className="heading text-3xl tracking-tight">Shopenix Company</div>
                                <div className="text-gray-300 mt-4 mr-35">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            </div>
                            <div className="footer-column w-[calc(15%-30px)]">
                                <div className="heading text-3xl tracking-tight">Company</div>
                                <ul className="text-gray-300 mt-4 flex flex-col gap-1">
                                    <li><Link to={'/'}>About Us</Link></li>
                                    <li><Link to={'/'}>Join Our Team</Link></li>
                                    <li><Link to={'/'}>Read Blog</Link></li>
                                    <li><Link to={'/'}>Press</Link></li>
                                </ul>
                            </div>
                            <div className="footer-column w-[calc(15%-30px)]">
                                <div className="heading text-3xl tracking-tight">Services</div>
                                <ul className="text-gray-300 mt-4 flex flex-col gap-1">
                                    <li><Link to={'/'}>Pricing</Link></li>
                                    <li><Link to={'/'}>Documentation</Link></li>
                                    <li><Link to={'/'}>Support</Link></li>
                                </ul>
                            </div>
                            <div className="footer-column w-[calc(25%-30px)]">
                                <div className="heading text-3xl tracking-tight">Find Us</div>
                                <div className="text-gray-300 mt-4">667 RevenStreet 44, <br />
                                    Crocpit Lasanga Preticy 66996</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="bottom-inner flex items-center justify-between text-gray-300">
                            <div className="bottom-left-content">Copyright © 2026 Shopenix. All rights reserved.</div>
                            <div className="bottom-right-content flex gap-5 justify-center items-center">
                                <div>Call us <span className="font-medium">(+67) 969-969-9696</span></div>
                                <div className="icons">
                                    <ul className={"social-media-icons flex items-center"}>
                                        <li className="p-3 hover:text-red-600 transition duration-500"><Link to={'/'}><IoLogoFacebook /></Link></li>
                                        <li className="p-3 hover:text-red-600 transition duration-500"><Link to={'/'}><FaSquareXTwitter /></Link></li>
                                        <li className="p-3 hover:text-red-600 transition duration-500"><Link to={'/'}><FaSquareInstagram /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;