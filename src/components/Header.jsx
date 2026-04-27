import { useEffect, useState } from "react";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <>
            <div className={`header-main fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}>
                <div className="max-w-400 mx-auto px-20">
                    <div className="header-top px-10">
                        <div className="inner-header-top flex items-center justify-around">
                            <div className="left-content">
                                <div className="header-title">
                                    <Link to={'/'}> <span className={`text-[28px] font-semibold ${scrolled ? 'text-black' : 'text-white'
                                        }`}>Shopenix</span> </Link>
                                </div>
                            </div>
                            <div className="center-content">
                                <ul className={`header-menu flex items-center gap-5 font-semibold text-sm 
                                ${scrolled ? 'text-gray-500' : 'text-white'}`
                                }>
                                    <li className="p-3 hover:text-red-600 transition"><Link to={'/'}>Home</Link></li>
                                    <li className="p-3 hover:text-red-600 transition"><Link to={'/'}>About</Link></li>
                                    <li className="p-3 hover:text-red-600 transition"><Link to={'/'}>Blog</Link></li>
                                    <li className="p-3 hover:text-red-600 transition"><Link to={'/'}>Our Work</Link></li>
                                    <li className="p-3 hover:text-red-600 transition"><Link to={'/'}>Contacts</Link></li>
                                </ul>
                            </div>
                            <div className={`right-content flex items-center gap-10
                            ${scrolled ? 'text-gray-500' : 'text-white'}`
                            }>
                                <ul className={"social-media-icons flex items-center"}>
                                    <li className="p-3 hover:text-red-600 transition"><Link to={'/'}><IoLogoFacebook /></Link></li>
                                    <li className="p-3 hover:text-red-600 transition"><Link to={'/'}><FaSquareXTwitter /></Link></li>
                                    <li className="p-3 hover:text-red-600 transition"><Link to={'/'}><FaSquareInstagram /></Link></li>
                                </ul>
                                <div className="sign-in-button">
                                    <Link to={'/'} className="px-6 py-3.5 text-[15px] tracking-tight text-center align-middle font-semibold text-white bg-red-600 rounded-4xl hover:bg-black transition">Sign in / Join</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-middle"></div>
                    <div className="header-bottom"></div>
                </div>
            </div>
        </>
    )
}

export default Header;