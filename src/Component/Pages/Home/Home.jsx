import React from "react";
import HeroSection from "./HeroSection";
import AboutCollege from "./AboutCollege";
import About from "./About";
import CollegesHomeCards from "./CollegeCard/CollegesHomeCards";
import PhotoGallery from "./AboutCollege/PhotoGallary/PhotoGallery";
import Container from "../../Shared/Container/Container";
import Heading from "../../Shared/Heading/Heading";


const Home = () => {
  return (
    <div>
     <HeroSection/>
     <About/>
     <AboutCollege/>
     <CollegesHomeCards/>
     <div className="mb-10 text-center">
      <div className="mb-10">
      <Heading  subtitle= " See our college graduate photos" title="Our college graduate" > </Heading>
      </div>
      

     
     <Container>
     <PhotoGallery/>
     </Container>
     </div>
     
    </div>
  );
};

export default Home;
