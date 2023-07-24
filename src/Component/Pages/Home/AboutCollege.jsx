import React from "react";
import success from "../../../../public/Images/Icons/success.png";
import scedules from "../../../../public/Images/Icons/scedules.png";
import trust from "../../../../public/Images/Icons/trust.png";
import cruse from "../../../../public/Images/Icons/course.png";
import image1 from "../../../../public/Images/Images/image-1.webp";
import AboutCourse from "./AboutCollege/AboutCourse";
import Container from "../../Shared/Container/Container";

const AboutCollege = () => {
  return (
    <div>
      <div
        className="w-full h-full bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <Container >
          <div className=" my-20 grid grid-cols-2 md:grid-cols-4 mx-auto items-center justify-center " >
            <div className="z-10">
              <AboutCourse
                image={success}
                title="3,000"
                details="SUCCESS STORIES"
              />
            </div >
            <div className="z-10">
              <AboutCourse image={scedules} title="1,000" details="SCHEDULES" />
            </div>
            <div className="z-10">
              <AboutCourse image={trust} title="320" details="TRUSTED TUTORS" />
            </div>
            <div className="z-10">
              <AboutCourse image={cruse} title="587" details="COURSES" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutCollege;
