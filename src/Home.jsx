import AboutSection from "./components/AboutSection";
import Banner from "./components/Banner";
import BlogSection from "./components/BlogSection";
import ContactUsSection from "./components/ContactUsSection";
import WorkSection from "./components/WorkSection";

const Home =()=>{
    return(
        <>
        <Banner/>
        <AboutSection/>
        <BlogSection/>
        <WorkSection/>
        <ContactUsSection/>
        <Banner/>

        </>
    )
}

export default Home;