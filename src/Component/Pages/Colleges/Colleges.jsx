import Container from "../../Shared/Container/Container";
import CollegeCard from "./CollegeCard";
import useColleges from "../../Hook/useColleges";
import LoadingSpinners from "../../Shared/LoadingSpinners/LoadingSpinners";
import image1 from "../../../../public/Images/Images/image-1.webp";
import HeroImage from "../../Shared/HeroImage/HeroImage";

const Colleges = () => {
  const [college, loading] = useColleges();
 
  return (
    <div>
      <HeroImage img={image1} title='Our Colleges' subtitle='See Our Colleges'/>
      <Container>
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <LoadingSpinners />
          </div>
        ) : (
          <div className="my-24">
            <div className="grid md:grid-cols-2 w-[100%] gap-10">
              {college.map((collegeData) => (
                <CollegeCard
                  key={collegeData._id}
                  collegeData={collegeData}
                ></CollegeCard>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Colleges;
