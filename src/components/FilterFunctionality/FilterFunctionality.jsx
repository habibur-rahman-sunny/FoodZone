'use client'

import { SearchingItemContext } from "@/app/Context/SearchingFoodContext";
import { useContext, useState } from "react";

const FilterFunctionality = ({ FoodsData, onSearch, onFilter }) => {
  // Get searchingItem from Context inside TrendingFoods.
  // Then create a conditional variable by comparing it with the main FoodsData array.
  // If searchingItem contains data, use it; otherwise use FoodsData.
  const { searchingItem, setSearchingItem } = useContext(SearchingItemContext);

  // State for storing the search input value.
  // This state will be used with the includes() method to filter foods.
  // No array is needed because it only stores a single string value.
  const [searchingInput, setSearchingInput] = useState()
  const [selectedOption, setSelectedOption] = useState()

  // For found expected item and set item 
  const handleSearching = () => {
    onSearch(searchingInput);
  }


  return (

    <div className="flex flex-col sm:flex-row w-full md:w-2/3 gap-2 mx-auto">

  <input
    onChange={e => setSearchingInput(e.target.value)}
    type="text"
    placeholder="Search your favorite food..."
    className="input input-bordered w-full sm:flex-1"
  />

  <button
    onClick={handleSearching}
    className="btn w-full sm:w-auto bg-purple-500 text-white hover:bg-purple-600"
  >
    Search
  </button>

  {/* Filter Dropdown */}
  <div className="w-full sm:w-auto">
    <select
      onChange={(e) => {
        const value = e.target.value;
        setSelectedOption(value);

        if (value === "All") {
          onFilter("");
        } else {
          onFilter(value);
        }
      }}
      className="select select-bordered w-full sm:w-52"
    >
      <option>Filter By Category</option>
      <option>All</option>
      <option>burger</option>
      <option>biriyani</option>
      <option>beverage</option>
      <option>dish</option>
    </select>
  </div>

</div>




  );
};

export default FilterFunctionality;