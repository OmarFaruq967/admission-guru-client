import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import Heading from "../../Shared/Heading/Heading";
import image1 from "../../../../public/Images/Images/image-1.webp";

const CollegeDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/college/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching college details:", error);
        setLoading(false);
      });
  }, [id]);

  console.log("Current data:", data);
  const {
    college_image,
    college_name,
    admission_process,
    events_details,
    research_works,
    sports_categories,
    sports,
  } = data;

  return (
    <div className="mb-24">
      {/* college details hero section */}
      <div
        className="w-full h-96 bg-fixed bg-cover bg-no-repeat bg-center relative mb-10"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className=" h-96  flex mx-0 items-center justify-center">
          <div className="z-10 text-white text-center ">
           <Heading title={college_name} subtitle='See details of'></Heading>
          </div>
        </div>
      </div>
      <Container>
        <div className=" grid md:grid-cols-2 gap-5">
          <div>
            <div className="h-[100vh] rounded-md">
              <img
                className="h-[100vh] rounded-md"
                src={college_image}
                alt=""
              />
            </div>
          </div>
          <div className=" border-2 border-r-8 border-b-8 rounded-lg border-[#041838] shadow-xl p-5">
            <div>
              <h2 className="text-xl font-bold mb-5 text-center">
                {" "}
                {college_name}
              </h2>
            </div>
            <div>
              <h2 className="text-center">
                <span className="text-base font-medium ">
                  Admission process:{" "}
                </span>
                {admission_process}
              </h2>
            </div>
            <div>
              <h2 className="text-base font-medium mt-3">Events details:</h2>
              <ul className=" grid md:grid-cols-3 text-base mt-2 gap-3 ">
                {data.events_details ? (
                  Object.keys(data.events_details).map((events) => (
                    <li
                      className="my-2 border-2 rounded-md p-3 text-base"
                      key={events}
                    >
                      {events}: {data.events_details[events]}
                    </li>
                  ))
                ) : (
                  <li>No events details available.</li>
                )}
              </ul>
            </div>
            <div>
              <h2 className="text-base font-medium mt-3">Research works:</h2>
              <ul className=" grid md:grid-cols-4 text-base mt-1 gap-3 ">
                {data.research_works ? (
                  Object.keys(data.research_works).map((research) => (
                    <li
                      className="my-2 border-2 rounded-md p-3 text-base font-semibold"
                      key={research}
                    >
                      {research}: {data.research_works[research]}
                    </li>
                  ))
                ) : (
                  <li>No research details available.</li>
                )}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-bold my-2">Sports:</h2>

              <ul className="text-sm font-bold flex gap-2">
                {sports?.map((sport, index) => (
                  <li className="border-2 rounded-md p-3" key={index}>
                    {sport}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Render other details from the data object */}
    </div>
  );
};

export default CollegeDetails;
