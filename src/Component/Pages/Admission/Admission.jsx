import React from "react";
import AdmissionCard from "./AdmissionCard";
import useColleges from "../../Hook/useColleges";
import Container from "../../Shared/Container/Container";

const Admission = () => {
  const [college, loading] = useColleges();
  return (
    <div>
      <Container>
        <div className="flex items-center justify-center h-full w-full">
          {/* Parent Container */}
            <ul className="my-24 grid md:grid-cols-3 gap-5">
              {college.map((result) => (
                <li className="text-lg font-semibold">
                  <AdmissionCard key={result._id} result={result}>
                  </AdmissionCard>
                </li>
              ))}
            </ul>
        </div>
      </Container>
    </div>
  );
};

export default Admission;
