import React, { useEffect, useState } from "react";
import useColleges from "../../../Hook/useColleges";
import Container from "../../../Shared/Container/Container";
import CollegeHomeCard from "./CollegeHomeCard";

const CollegesHomeCards = () => {
  const [college] = useColleges();
  const limitedColleges = college.slice(0, 3);
 
  return (
    <div>
      <Container>
        <div className="my-24  ">
          <div className="grid md:grid-cols-3 w-[100%] gap-5">
            {limitedColleges.map((collegeItem) => (
              <CollegeHomeCard
                key={collegeItem.id}
                collegeItem={collegeItem}
              ></CollegeHomeCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CollegesHomeCards;
