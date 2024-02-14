import React, { useState, useEffect } from "react";
import image1 from "../../../../public/Images/Images/image-1.webp";
import HeroImage from "../../Shared/HeroImage/HeroImage";
import useMyColleges from "../../Hook/useMyColleges";
import Container from "../../Shared/Container/Container";
import LoadingSpinners from "../../Shared/LoadingSpinners/LoadingSpinners";
import MyCollegeCard from "./MyCollegeCard";
import useColleges from "../../Hook/useColleges";

const MyCollege = () => {
  const [admissions, loading] = useMyColleges();
  const [colleges] = useColleges();

  return (
    <div>
      <div>
        <HeroImage
          img={image1}
          title="Your admitted Colleges"
          subtitle="view your admitted Colleges list"
        />
      </div>
      <Container>
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <LoadingSpinners />
          </div>
        ) : admissions.length === 0 ? (
          <div>
            <h2 className="text-center p-5 font-bold">You don't have any college admission yet</h2>
          </div>
        ) : (
          <div className="my-24">
            <div className="grid md:grid-cols-2 w-[100%] gap-10">
              {admissions.map((admission, index) => {
                // Find the corresponding college based on admission.collegeId
                const collegeData = colleges.find(college => college._id === admission.collegeId);
                
                return (
                  <MyCollegeCard
                    key={admission._id}
                    admission={admission}
                    college={collegeData}
                  ></MyCollegeCard>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default MyCollege;
