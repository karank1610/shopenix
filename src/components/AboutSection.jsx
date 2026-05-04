const AboutSection = () => {
    return (
        <>
            <div className="about-section-main mt-15 w-full flex justify-center items-center">
                <div className="max-w-400 mx-auto px-40">
                    <div className="about-section-content flex items-center gap-20">
                        <div className="inner-left-content flex flex-col items-start gap-2 w-[41.6667%]">
                            <span className="text-3xl">Let us introduce</span>
                            <div className="flex items-center gap-2 my-1">
                                <span className="w-8 h-1 bg-gray-300 rounded-full"></span>
                                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                            </div>
                            <span className="text-[14.5px] text-gray-500 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>
                            <span className="text-[14.5px] text-gray-500 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</span>
                        </div>

                        <div className="inner-center-content w-[25%]">
                            <div className="progress-details flex flex-col gap-4">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-[14px] font-medium text-gray-700">Web Design</span>
                                        <span className="text-[14px] text-black">85%</span>
                                    </div>
                                    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-black rounded-full w-[85%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-[14px] font-medium text-gray-700">Photography</span>
                                        <span className="text-[14px] text-black">90%</span>
                                    </div>
                                    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-black rounded-full w-[90%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-[14px] font-medium text-gray-700">Content Marketing</span>
                                        <span className="text-[14px] text-black">75%</span>
                                    </div>
                                    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-black rounded-full w-[75%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-[14px] font-medium text-gray-700">CMS Admin</span>
                                        <span className="text-[14px] text-black">70%</span>
                                    </div>
                                    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-black rounded-full w-[70%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inner-right-content w-[33.3333%]">
                            <div className="wrapper w-full h-full object-cover overflow-hidden ">
                                <img src="/assets/img/about-image.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection;
