// Pagination.jsx
import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-1">
      <button className="px-4 py-2 bg-gray-200 rounded-l-lg hover:bg-gray-300">
        Previous
      </button>
      <span className="px-4 py-2 bg-white border-t border-b">
        Page 1 of 5
      </span>
      <button className="px-7 py-2 bg-gray-200 rounded-r-lg hover:bg-gray-300">
        Next
      </button>
    </div>
  );
};

export default Pagination;
