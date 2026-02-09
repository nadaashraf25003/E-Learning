// components/Pagination.jsx - Simpler Responsive Version
import React from "react";

function Pagination({
  currentPage = 1,
  totalItems = 0,
  itemsPerPage = 6,
  onPageChange,
  activeColor = "#49BBBD",
  inactiveColor = "#f3f2f2",
  className = "",
}) {
  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const handlePageClick = (page) => {
    if (onPageChange && page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  if (totalPages <= 1 || totalItems === 0) {
    return null;
  }

  return (
    <div className={`pagination flex flex-wrap items-center justify-center gap-1 sm:gap-2 ${className}`}>
      {/* Previous button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 sm:p-3 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 transition-all duration-200"
        style={{ backgroundColor: inactiveColor }}
        aria-label="Previous page"
      >
        <span className="hidden sm:inline">&larr;</span>
        <span className="sm:hidden text-xs sm:text-base">←</span>
      </button>
      
      {/* First page - always visible */}
      <button
        onClick={() => handlePageClick(1)}
        className="p-2 sm:p-3 min-w-[32px] sm:min-w-[44px] rounded cursor-pointer text-xs sm:text-base transition-all duration-200 hover:opacity-80 hover:scale-105"
        style={{
          backgroundColor: currentPage === 1 ? activeColor : inactiveColor,
          fontWeight: currentPage === 1 ? 'bold' : 'normal',
        }}
      >
        1
      </button>
      
      {/* Show ellipsis and middle pages based on current page */}
      {currentPage > 3 && (
        <span className="p-2 sm:p-3 text-gray-500 text-xs sm:text-base hidden sm:inline">
          ...
        </span>
      )}
      
      {/* Previous page */}
      {currentPage > 2 && (
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          className="p-2 sm:p-3 min-w-[32px] sm:min-w-[44px] rounded cursor-pointer text-xs sm:text-base hover:opacity-80 hover:scale-105 hidden sm:inline-block"
          style={{ backgroundColor: inactiveColor }}
        >
          {currentPage - 1}
        </button>
      )}
      
      {/* Current page (if not first or last) */}
      {currentPage > 1 && currentPage < totalPages && (
        <button
          className="p-2 sm:p-3 min-w-[32px] sm:min-w-[44px] rounded cursor-pointer text-xs sm:text-base font-bold shadow-md"
          style={{ backgroundColor: activeColor }}
        >
          {currentPage}
        </button>
      )}
      
      {/* Next page */}
      {currentPage < totalPages - 1 && (
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          className="p-2 sm:p-3 min-w-[32px] sm:min-w-[44px] rounded cursor-pointer text-xs sm:text-base hover:opacity-80 hover:scale-105 hidden sm:inline-block"
          style={{ backgroundColor: inactiveColor }}
        >
          {currentPage + 1}
        </button>
      )}
      
      {/* Show ellipsis before last page */}
      {currentPage < totalPages - 2 && (
        <span className="p-2 sm:p-3 text-gray-500 text-xs sm:text-base hidden sm:inline">
          ...
        </span>
      )}
      
      {/* Last page (if there is one) */}
      {totalPages > 1 && (
        <button
          onClick={() => handlePageClick(totalPages)}
          className="p-2 sm:p-3 min-w-[32px] sm:min-w-[44px] rounded cursor-pointer text-xs sm:text-base transition-all duration-200 hover:opacity-80 hover:scale-105"
          style={{
            backgroundColor: currentPage === totalPages ? activeColor : inactiveColor,
            fontWeight: currentPage === totalPages ? 'bold' : 'normal',
          }}
        >
          {totalPages}
        </button>
      )}
      
      {/* Next button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 sm:p-3 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 transition-all duration-200"
        style={{ backgroundColor: inactiveColor }}
        aria-label="Next page"
      >
        <span className="hidden sm:inline">&rarr;</span>
        <span className="sm:hidden text-xs sm:text-base">→</span>
      </button>
      
      {/* Mobile current page indicator */}
      <div className="sm:hidden text-center w-full mt-2 text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}

export default Pagination;