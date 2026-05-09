import { useState } from "react";
import { IoClose } from "react-icons/io5";

const WorkSection = () => {

    const [activeImg, setActiveImg] = useState(null);

    const Works = [
        { img: "/assets/img/work-image1.jpg", title: "Clean & Minimal", subtitle: "product design" },
        { img: "/assets/img/work-image2.jpg", title: "Studio Bag", subtitle: "branding" },
        { img: "/assets/img/work-image3.jpg", title: "Frame Design", subtitle: "photography" },
        { img: "/assets/img/work-image4.jpg", title: "Paint Work", subtitle: "art, design" },
    ]

    return (
        <>
            <div className="work-section-main py-15 w-full flex justify-center items-center">
                <div className="max-w-400 mx-auto px-40">
                    <div className="work-section-content">

                        <div className="title flex items-center flex-col gap-1">
                            <span className="text-3xl">Our Work</span>
                            <div className="flex items-center gap-2 my-1">
                                <span className="w-8 h-1 bg-gray-300 rounded-full"></span>
                                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                            </div>
                        </div>

                        <div className="work-card-main flex items-center flex-wrap gap-7 mt-8">
                            {Works.map((work, index) => (
                                <div
                                    key={index}
                                    className="work-card-child group w-[calc(25%-21px)] overflow-hidden relative cursor-pointer"
                                    onClick={() => setActiveImg(work)}
                                >
                                    <img src={work.img} alt="work" className="w-full h-full object-cover block" />

                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-red-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                                    <div className="hover-text absolute text-white top-0 left-0 right-0 bottom-0 flex flex-col gap-1 items-center justify-center text-center translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000">
                                        <span className="text-2xl font-medium">{work.title}</span>
                                        <span className="text-sm uppercase">{work.subtitle}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal */}
            {activeImg && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-10"
                    onClick={() => setActiveImg(null)}
                >
                    <div
                        className="relative max-w-xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="absolute -top-10 right-0 text-white text-3xl hover:text-red-500 transition cursor-pointer"
                            onClick={() => setActiveImg(null)}
                        >
                            <IoClose />
                        </button>

                        <img src={activeImg.img} alt="" className="w-full rounded-md block" />

                        <div className="text-white text-center mt-4 flex flex-col gap-1">
                            <span className="text-xl font-medium">{activeImg.title}</span>
                            <span className="text-gray-400 text-sm uppercase">{activeImg.subtitle}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default WorkSection;