import React, { useState, useEffect, useContext } from "react";
import image1 from "../../../../public/Images/Images/image-1.webp";
import HeroImage from "../../Shared/HeroImage/HeroImage";
import useMyColleges from "../../Hook/useMyColleges";
import Container from "../../Shared/Container/Container";
import LoadingSpinners from "../../Shared/LoadingSpinners/LoadingSpinners";
import MyCollegeCard from "./MyCollegeCard";
import useColleges from "../../Hook/useColleges";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCollege = () => {
  const [admissions, loading] = useMyColleges();
  const [colleges] = useColleges();
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  

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
        <section className="grid md:grid-cols-3 gap-10 my-24">
          <div className="col-span-1 bg-[#f2f2f2] p-10 rounded-lg 50vh">
            <div className="flex mx-0 justify-center mb-5">
              {user?.photoURL && (
                <img
                  src={user?.photoURL}
                  alt="User Profile"
                  className="rounded-full h-48 w-48 "
                />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                <span className="text-2xl pb-2 font-semibold">Name: </span>
                {user?.displayName}
              </h2>
              <h2>
                <span className="text-lg pb-3  font-semibold">Email: </span>
                {user?.email}
              </h2>
              <h2>
                <span className="text-lg pb-3  font-semibold">Phone: </span>
                {admissions?.[0]?.phoneNumber}
              </h2>
              <h2>
                <span className="text-lg pb-3  font-semibold">Address: </span>
                {admissions?.[0]?.address}
              </h2>
              <h2>
                <span className="text-lg pb-3  font-semibold">Date of Birth: </span>
                {admissions?.[0]?.birthDay}
              </h2>
            </div>
          </div>

          <div className="col-span-2">
            {loading ? (
              <div className="flex items-center justify-center h-screen">
                <LoadingSpinners />
              </div>
            ) : admissions.length === 0 ? (
              <div>
                <h2 className="text-center p-5 pt-10 pb-10 font-bold">
                  You don't have any college admission yet
                </h2>
              </div>
            ) : (
              <div className="">
                <div className="grid md:grid-cols-2 w-[100%] gap-10">
                  {admissions.map((admission, index) => {
                    // Find the corresponding college based on admission.collegeId
                    const collegeData = colleges.find(
                      (college) => college._id === admission.collegeId
                    );
                     
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
          </div>
        </section>
      </Container>
    </div>
  );
};

export default MyCollege;
