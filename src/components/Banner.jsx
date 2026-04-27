import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <div className="banner-main min-h-screen w-full flex items-center justify-center relative overflow-hidden">
                <img src="/assets/img/banner.jpg" alt=""
                    className="absolute inset-0 object-cover opacity-50 blur-xs" />
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-green-500 opacity-60"></div>
                <div className="banner-content relative z-10 flex items-center justify-center gap-20">
                    <div className="inner-right-content flex flex-col gap-10">
                        <span className="text-5xl text-white w-130 leading-snug ">
                            We make beautiful websites for all people.
                        </span>
                        <div className="contact flex gap-10">
                            <Link to={'/'} className="px-7 py-3 rounded-4xl border-[white] text-white ring-2 hover:bg-red-600 hover:ring-0 transition duration-300">Start a project</Link>
                            <span className="text-white w-50 font-semibold text-sm">CALL US (+66) 010-020-0340
                                For any inquiry</span>
                        </div>
                    </div>
                    <div className="inner-left-content">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xnOwOBYaA3w?si=dwg3keHb2-vge3pN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;