import styled from "styled-components";
import Header from "../../components/Layout/Header";
import Intro from "../../components/Layout/Sections/Intro";
import AboutSection from "../../components/Layout/Sections/About";
import ActionSection from '../../components/Layout/Sections/Action'
import HelpSection from "../../components/Layout/Sections/Help";
import Footer from "../../components/Layout/Footer";

function Home(){
    return(
        <>
            <Header/>
            <Intro/>
            <AboutSection/>
            <ActionSection/>
            <HelpSection/>
            <Footer/>
        </>
    )
}


export default Home;