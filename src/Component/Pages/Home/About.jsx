import React from "react";
import AboutCard from "./AboutCollege/AboutCard";
import about from "../../../../public/images/Images/about.webp";
import book from "../../../../public/Images/Icons/Book.png";
import certificate from "../../../../public/Images/Icons/Certificate.png";
import expert from "../../../../public/Images/Icons/Userhead.png";
import Heading from "../../Shared/Heading/Heading";
import Container from "../../Shared/Container/Container";

const About = () => {
  return (
    <div>
      <Container>
        <div className="my-20 md:flex  gap-10">
          <div className="md:w-1/2">
            <img className="h-full w-full mb-5 " src={about} alt="" />
          </div>
          <div className="md:w-1/2">
            <Heading
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning And Admission"
            />
            <AboutCard
              image={book}
              title="Online Courses"
              details="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            />
            <AboutCard
              image={certificate}
              title="Earn A Certificates"
              details="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            />
            <AboutCard
              image={expert}
              title="Learn with Expert"
              details="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
