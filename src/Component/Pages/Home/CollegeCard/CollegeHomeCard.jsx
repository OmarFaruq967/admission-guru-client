import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import checkMark from "../../../../../public/images/Icons/Check-Mark.png"

const CollegeHomeCard = ({ collegeItem }) => {
  const { loading, setLoading } = useContext(AuthContext);
  console.log(collegeItem);
  const {
    college_name,
    admission_dates,
    college_image,
    college_rating,
    number_of_research,
    research_history,
    events,
    sports,
  } = collegeItem;

  return (
    <div>
      <div className=" border-2 border-r-8 border-b-8 rounded-lg border-[#041838] shadow-xl p-5 md:h-auto relative">
        <div>
          <img
            className="h-[270px] md:h-[250px] w-[100%]"
            src={college_image}
            alt=""
          />
        </div>
        <h2 className="text-base font-bold mt-5">
          {college_name}
        </h2>
        <div className="flex mt-2"></div>
        <h3 className="text-sm font-bold">
          Admission Dates: <span></span>
        </h3>
        <ul className="text-sm font-medium gap-2 list-inside list-decimal"
        >
          {Object.keys(admission_dates).map((season) => (
            <li className=" pr-2" key={season}>
              {season}: {admission_dates[season]}
            </li>
          ))}
        </ul>
        <div className=" mt-2 mb-14">
          <h3 className="text-sm font-bold">
            Research History :{" "}
            <span className="  text-sm font-semibold line-clamp-2 ">
              {research_history}
            </span>
          </h3>
        </div>
        {/* <div>
          <h3 className="text-sm font-bold">Events:</h3>
          <ul className="text-sm font-medium flex gap-2">
            {events.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div> */}
        {/* <div className="mb-14">
          <h3 className="text-sm font-bold">Sports:</h3>
          <ul className="text-sm font-medium flex gap-2 list-inside list-decimal ">
            {sports.map((sport, index) => (
              <li className="pr-1" key={index}>
                {sport}
              </li>
            ))}
          </ul>
        </div> */}
        <div className=" mt-5 bottom-3 absolute w-[90%] ">
          <Link to={`/college/${collegeItem._id}`}>
          <button
            type="submit"
            className=" bg-[#041838] hover:bg-[#fbbd23] w-full rounded-md py-3 text-white"
          >
            {loading ? (
              <FaSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Details"
            )}
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default CollegeHomeCard;
