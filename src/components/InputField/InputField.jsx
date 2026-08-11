'use client'

import { SearchingItemContext } from "@/app/Context/SearchingFoodContext";
import { useContext, useState } from "react";

const InputField = ({ FoodsData }) => {
// Get searchingItem from Context inside TrendingFoods.
// Then create a conditional variable by comparing it with the main FoodsData array.
// If searchingItem contains data, use it; otherwise use FoodsData.
const { searchingItem, setSearchingItem } = useContext(SearchingItemContext); 

// State for storing the search input value.
// This state will be used with the includes() method to filter foods.
// No array is needed because it only stores a single string value.
  const [searchingInput, setSearchingInput] = useState()

  // For found expected item and set item 
  const handleSearching = () => {
    const expectedItem = FoodsData.filter(specificFood => specificFood.dish_name.toLowerCase().includes(searchingInput.toLowerCase()));
    setSearchingItem(expectedItem);
  }

  return (
    <div className="flex w-full md:w-2/3 gap-2">
      <input
        onChange={e => setSearchingInput(e.target.value)}
        type="text"
        placeholder="Search your favorite food..."
        className="input input-bordered flex-1"
      />
      <button onClick={handleSearching} className="btn bg-purple-500 text-white hover:bg-purple-600">
        Search
      </button>
    </div>
  );
};

export default InputField;