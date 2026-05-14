import AboutSection from "./components/AboutSection";
import Banner from "./components/Banner";
import BlogSection from "./components/BlogSection";
import ContactUsSection from "./components/ContactUsSection";
import WorkSection from "./components/WorkSection";

const Home =()=>{
    return(
        <>
        <div id="banner"><Banner/></div>
        <div id="about"><AboutSection/></div>
        <div id="blog"><BlogSection/></div>
        <div id="work"><WorkSection/></div>
        <div id="contact"><ContactUsSection/></div>
        </>
    )
}

export default Home;