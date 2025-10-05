import React from "react"

// NOT YET COMPLETED, PROPS AND FUNCTIONALITY WILL BE ADDED LATER

const SearchComponent = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
        {/* Search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          className="flex-shrink-0"
        >
          <path
            d="M16 16.5L12.375 12.875M14.3333 8.16667C14.3333 11.8486 11.3486 14.8333 7.66667 14.8333C3.98477 14.8333 1 11.8486 1 8.16667C1 4.48477 3.98477 1.5 7.66667 1.5C11.3486 1.5 14.3333 4.48477 14.3333 8.16667Z"
            stroke="#1C1B1F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Input */}
        <input
          type="text"
          placeholder="Search Courses"
          className="flex-grow pl-2 focus:outline-none placeholder:font-light placeholder:text-[#99999E] text-sm bg-transparent min-w-0"
        />

        {/* Filter button */}
        <button className="ml-2 text-gray-500 hover:text-blue-600 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M5.5 10H15.5M3 5H18M8 15H13"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SearchComponent
