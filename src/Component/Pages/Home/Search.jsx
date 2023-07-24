import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import useColleges from "../../Hook/useColleges";
import SearchCard from "./SearchCard";

const Search = () => {
  const [college] = useColleges();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { college_name } = college;

  const handleSearch = (event) => {
    const searchTermValue = event.target.value;
    setSearchTerm(searchTermValue);

    // Filter search results based on the searchTerm, or clear results if the search term is empty
    const filteredResults = searchTermValue
      ? college.filter((college) =>
          college.college_name.toLowerCase().includes(searchTermValue.toLowerCase())
        )
      : [];

    setSearchResults(filteredResults);
  };

  return (
    <div className="relative">
      <div className="flex relative">
        <input
          type="text"
          placeholder="Search your college"
          className="bg-[#0418380c] relative border-[1px] w-full px-5 py-3 rounded-full shadow-sm border-white hover:shadow-md focus:outline-none focus:border-[#FBBD23] "
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="absolute right-0 mt-2 hidden sm:block text-sm font-semibold px-2 text-center cursor-pointer">
          <div className="p-2 px-6 bg-[#FBBD23] rounded-full text-white">
            <BiSearch onClick={handleSearch} size={18} />
          </div>
        </div>
      </div>
      {/* Display search results */}
      <div className="absolute flex items-center justify-center h-full w-full">
        {/* Parent Container */}
        {searchResults.length > 0 && (
          <ul className="absolute bottom-2 top-5 grid md:grid-cols-2 gap-2">
            {searchResults.slice(0, 2).map((result) => (
              <li  className="text-lg font-semibold px-6">
                <SearchCard key={result._id} result={result} >
                {result.college_name}
                </SearchCard>
                
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
