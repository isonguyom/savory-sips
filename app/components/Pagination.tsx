import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (!isFirstPage) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      handlePageChange(currentPage + 1);
    }
  };

  // Create an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full flex items-center justify-center mt-28 gap-x-4 md:gap-x-14 border-y border-[#F4EDED]">
      <button
        onClick={handlePrevious}
        disabled={isFirstPage}
        className={`p-4 ${isFirstPage ? "opacity-50 cursor-not-allowed" : "opacity-100"} hover:opacity-80`}
      >
        <svg width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.1386 29.1422L15.427 30.964L5.4954 21.6454C5.33534 21.4961 5.20638 21.3166 5.11594 21.1173C5.02551 20.918 4.97538 20.7028 4.96846 20.484C4.96153 20.2652 4.99793 20.0473 5.07557 19.8426C5.15321 19.638 5.27056 19.4507 5.42085 19.2916L14.7427 9.35817L16.5644 11.068L7.8152 20.3913L17.1386 29.1422Z" fill="black" />
        </svg>

      </button>
      <div className="flex items-center justify-center">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`h-[60px] text-lg font-InriaSerif px-4 border-y flex items-center justify-center cursor-pointer ${page === currentPage ? "font-bold text-[#511D21] border-[#501B1F] cursor-not-allowed" : "text-[#180A0B] border-[#F4EDED]"
              } hover:text-[##511D21]`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={isLastPage}
        className={`p-4 ${isLastPage ? "opacity-50 cursor-not-allowed" : "opacity-100"} hover:opacity-80`}
      >
        <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.08664 10.9675L5.85498 9.20084L15.4866 18.8292C15.6419 18.9835 15.7651 19.1669 15.8492 19.369C15.9333 19.5711 15.9766 19.7878 15.9766 20.0067C15.9766 20.2255 15.9333 20.4423 15.8492 20.6443C15.7651 20.8464 15.6419 21.0299 15.4866 21.1842L5.85498 30.8175L4.08831 29.0508L13.1283 20.0092L4.08664 10.9675Z" fill="black" />
        </svg>

      </button>
    </div>
  );
};

export default Pagination;
