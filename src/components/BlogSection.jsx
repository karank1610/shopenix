import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const BlogSection = () => {
    return (
        <>
            <div className="blog-section-main py-15 bg-gray-200 w-full flex justify-center items-center">
                <div className="max-w-400 mx-auto px-40">
                    <div className="blog-section-content">
                        <div className="blog-section-header flex items-center flex-col gap-1">
                            <span className="text-3xl">Our Blog</span>
                            <div className="flex items-center gap-2 my-1">
                                <span className="w-8 h-1 bg-gray-300 rounded-full"></span>
                                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                            </div>
                        </div>

                        <div className="blog-card-main flex items-center flex-wrap mt-8 gap-7">

                            <div className="blog-card w-[calc(50%-14px)] h-87.5 overflow-hidden flex items-center bg-white shadow-[0_1px_30px_rgba(0,0,0,0.1)]">
                                <div className="left-content w-[45%] h-full object-cover">
                                    <Link to={'/'}>
                                        <img src="/assets/img/blog-image1.jpg" alt="" className="w-full h-full object-cover block" />
                                    </Link>
                                </div>
                                <div className="right-content w-[55%] flex flex-col gap-3 mx-10">
                                    <div className="date flex items-center gap-2 text-red-700 text-[12px] font-normal">
                                        <FiClock />
                                        <span>December 22, 2017</span>
                                    </div>
                                    <Link to={'/'}>
                                        <span className="text-2xl tracking-tight hover:text-red-700 transition-all duration-400">How To Find Out Beautiful Workspace.</span>
                                    </Link>
                                    <span className="text-gray-500 mr-4">Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</span>
                                    <div className="read-article-button mt-6">
                                        <Link to={'/'} className="px-7 py-3.5 text-[15px] text-center align-middle font-normal text-gray-800 bg-gray-100 rounded-4xl hover:bg-linear-to-r hover:from-blue-500 hover:to-green-500 hover:text-white transition-all duration-400">Read article</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-card w-[calc(50%-14px)] h-87.5 overflow-hidden flex items-center bg-white shadow-[0_1px_30px_rgba(0,0,0,0.1)]">
                                <div className="left-content w-[45%] h-full object-cover">
                                    <Link to={'/'}>
                                        <img src="/assets/img/blog-image2.jpg" alt="" className="w-full h-full object-cover block" />
                                    </Link>
                                </div>
                                <div className="right-content w-[55%] flex flex-col gap-3 mx-10">
                                    <div className="date flex items-center gap-2 text-red-700 text-[12px] font-normal">
                                        <FiClock />
                                        <span>December 18, 2017</span>
                                    </div>
                                    <Link to={'/'}>
                                        <span className="text-2xl tracking-tight hover:text-red-700 transition-all duration-400">woman sportwear.</span>
                                    </Link>
                                    <span className="text-gray-500 mr-4">Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</span>
                                    <div className="read-article-button mt-6">
                                        <Link to={'/'} className="px-7 py-3.5 text-[15px] text-center align-middle font-normal text-gray-800 bg-gray-100 rounded-4xl hover:bg-linear-to-r hover:from-blue-500 hover:to-green-500 hover:text-white transition-all duration-400">Read article</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-card w-[calc(50%-14px)] h-87.5 overflow-hidden flex items-center bg-white shadow-[0_1px_30px_rgba(0,0,0,0.1)]">
                                <div className="left-content w-[45%] h-full object-cover">
                                    <Link to={'/'}>
                                        <img src="/assets/img/blog-image3.jpg" alt="" className="w-full h-full object-cover block" />
                                    </Link>
                                </div>
                                <div className="right-content w-[55%] flex flex-col gap-3 mx-10">
                                    <div className="date flex items-center gap-2 text-red-700 text-[12px] font-normal">
                                        <FiClock />
                                        <span>December 14, 2017</span>
                                    </div>
                                    <Link to={'/'}>
                                        <span className="text-2xl tracking-tight hover:text-red-700 transition-all duration-400">new creative fashion.</span>
                                    </Link>
                                    <span className="text-gray-500 mr-4">Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</span>
                                    <div className="read-article-button mt-6">
                                        <Link to={'/'} className="px-7 py-3.5 text-[15px] text-center align-middle font-normal text-gray-800 bg-gray-100 rounded-4xl hover:bg-linear-to-r hover:from-blue-500 hover:to-green-500 hover:text-white transition-all duration-400">Read article</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-card w-[calc(50%-14px)] h-87.5 overflow-hidden flex items-center bg-white shadow-[0_1px_30px_rgba(0,0,0,0.1)]">
                                <div className="left-content w-[45%] h-full object-cover">
                                    <Link to={'/'}>
                                        <img src="/assets/img/blog-image4.jpg" alt="" className="w-full h-full object-cover block" />
                                    </Link>
                                </div>
                                <div className="right-content w-[55%] flex flex-col gap-3 mx-10">
                                    <div className="date flex items-center gap-2 text-red-700 text-[12px] font-normal">
                                        <FiClock />
                                        <span>December 08, 2017</span>
                                    </div>
                                    <Link to={'/'}>
                                        <span className="text-2xl tracking-tight hover:text-red-700 transition-all duration-400">minimalist design trend in 2018.</span>
                                    </Link>
                                    <span className="text-gray-500 mr-4">Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</span>
                                    <div className="read-article-button mt-6">
                                        <Link to={'/'} className="px-7 py-3.5 text-[15px] text-center align-middle font-normal text-gray-800 bg-gray-100 rounded-4xl hover:bg-linear-to-r hover:from-blue-500 hover:to-green-500 hover:text-white transition-all duration-400">Read article</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSection;