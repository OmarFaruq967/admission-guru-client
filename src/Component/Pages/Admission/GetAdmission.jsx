import React from "react";
import useAdmission from "../../Hook/useAdmission";
import Container from "../../Shared/Container/Container";
import HeroImage from "../../Shared/HeroImage/HeroImage";
import LoadingSpinners from "../../Shared/LoadingSpinners/LoadingSpinners";
import AdmissionForm from "../AdmissionForm/AdmissionForm";
import Heading from "../../Shared/Heading/Heading";

const GetAdmission = () => {
  const [data, loading] = useAdmission();
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
    <div>
      <HeroImage
        img={college_image}
        title={college_name}
        subtitle="Get admission in"
      />
      <Container>
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <LoadingSpinners />
          </div>
        ) : (
          <div className="mt-24">
            <Heading title='Admission process:' subtitle={admission_process}/>
            <div>
              <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                  <ul className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                    {events_details ? (
                      Object.keys(events_details).map((events) => (
                        <li
                          key={events}
                          className="flex space-x-2 sm:space-x-4"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="flex-shrink-0 w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            ></path>
                          </svg>
                          <div className="space-y-2">
                            <p className="text-lg font-medium leading-3">
                              Events details
                            </p>
                            <p className="leading-6">
                              {events}:{events_details[events]}
                            </p>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li>No events details available.</li>
                    )}
                  </ul>
                  <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                      <img
                        src="https://source.unsplash.com/640x480/"
                        alt=""
                        className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </Container>
      <div className="text-center">
        <Heading
          title="Admission Form"
          subtitle="Fill up this form for get your admission"
        />
      </div>
      <AdmissionForm collegeId={data._id} ></AdmissionForm>
    </div>
  );
};

export default GetAdmission;
