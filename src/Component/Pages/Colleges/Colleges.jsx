import Container from "../../Shared/Container/Container";
import CollegeCard from "./CollegeCard";
import useColleges from "../../Hook/useColleges";
import CollegeHero from "./CollegeHero";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import LoadingSpinners from "../../Shared/LoadingSpinners/LoadingSpinners";


const Colleges = () => {
  const [college] = useColleges();
  const { loading, setLoading } = useContext(AuthContext);

  return (
    <div>
      <CollegeHero />
      <Container>
        <div className="my-24 ">
          <div className="grid md:grid-cols-2 w-[100%] gap-10">
            {loading ? (
              <div className="flex mx-auto items-center mr-52 justify-center h-[50vh]">
                <LoadingSpinners/>
              </div>
            ) : (
              college.map((collegeData) => (
                <CollegeCard
                  key={collegeData.id}
                  collegeData={collegeData}
                ></CollegeCard>
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Colleges;
