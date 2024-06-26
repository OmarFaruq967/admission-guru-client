import React, { useState } from "react";
import AdmissionCard from "./AdmissionCard";
import useColleges from "../../Hook/useColleges";
import Container from "../../Shared/Container/Container";
import LoadingSpinners from "../../Shared/LoadingSpinners/LoadingSpinners";
import image1 from "../../../../public/Images/Images/image-1.webp";
import HeroImage from "../../Shared/HeroImage/HeroImage";
import useMyColleges from "../../Hook/useMyColleges";
import useRemoveAdmission from "../../Hook/useRemoveAdmission";


const Admission = () => {
  const [college, loading] = useColleges();
  const [selectedColleges] = useMyColleges();
  
  
 

  return (
    <div>
      <div>
        <HeroImage img={image1} title='Colleges for your admission' subtitle='See our all colleges'/>
      </div>
      <Container>
      {loading ? (
          <div className="flex items-center justify-center h-screen">
            <LoadingSpinners />
          </div>
        ) : (
            <ul className="my-24 grid md:grid-cols-3 gap-5">
              {college?.map((result, index ) => (
                <li key={result._id} className="text-lg font-semibold">
                  <AdmissionCard  
                  result={result} 
                  selectedColleges={selectedColleges} >
                  </AdmissionCard>
                </li>
              ))}
            </ul>
        )}
      </Container>
    </div>
  );
};

export default Admission;
