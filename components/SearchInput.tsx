import { Search } from "lucide-react";
import React from "react";

function SearchInput() {
  return (
    <div className="flex w-full items-center border border-gray-300 rounded-full px-3 py-2 bg-white focus-within:border-gray-400">
      <Search className="text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search articles..."
        className="ml-2 w-full outline-none text-gray-700 placeholder-gray-400"
      />
    </div>
  );
}

export default SearchInput;
