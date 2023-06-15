import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFlag, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import type { CourseData } from "../types";
import { useState, useEffect } from "react";
import { useFetchPostsBySearch } from "../lib/api";
import { useRouter } from "next/router";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<CourseData[]>([]);
  const router = useRouter();
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({
      pathname: '/search',
      query: { searchQuery }
    });
  };

  const posts = useFetchPostsBySearch(searchQuery);

  useEffect(() => {
    setSearchResults(posts);
  }, [posts]);
  
  // console.log(searchResults);

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <div className="rounded p-3 border border-black w-80 hidden md:flex items-center">
          {searchQuery.length > 0 && (
            <button type="submit">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="h-3.5 w-3.5 text-[#1A79F2] mr-2"
              />
            </button>
          )}
          <input
            type="text"
            id="search-navbar"
            className="w-full outline-none"
            placeholder="Search for a course name"
            required
            value={searchQuery} // Bind the value of the input field to the searchQuery state
            onChange={handleSearch} // Add the event handler for input changes
          />
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center pl-3 cursor-pointer">
          {searchQuery.length > 0 ?
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={handleClearSearch}
              className="z-10"
            /> :
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          }
        </div>
      </form>
      {searchResults.length > 0 ? (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded p-4 z-10">
          <h5 className="font-bold mb-3">Courses</h5>
          {searchResults.map((result) => (
            <li key={result.id} className="text-sm flex items-center mb-2">
              <FontAwesomeIcon icon={faFlag} className="text-[#48CA24] mr-2" />
              {result.title.rendered}
            </li>
          ))}
        </ul>
      ) : (
        searchQuery.length > 3 && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded p-4 z-10">
            No results found. Please try another search.
          </div>
        )
      )}
    </div>
  );
}
