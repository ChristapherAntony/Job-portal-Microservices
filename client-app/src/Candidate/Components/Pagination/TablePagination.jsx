import "./Pagination.css";

const TablePagination = ({ page, pages, changePage }) => {
  let middlePagination;

  if (pages <= 5) {
    middlePagination = [...Array(pages)].map((_, idx) => (

      <button
        key={idx + 1}
        onClick={() => changePage(idx + 1)}
        disabled={page === idx + 1}
        className="px-2 py-1 text-sm text-blue-500 rounded-md  bg-blue-100/60"
      >
        {idx + 1}
      </button>


    ));
  } else {
    const startValue = Math.floor((page - 1) / 5) * 5;

    middlePagination = (
      <>
        {[...Array(5)].map((_, idx) => (
          <li>
            <button
              key={startValue + idx + 1}
              disabled={page === startValue + idx + 1}
              onClick={() => changePage(startValue + idx + 1)}
              className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white  border border-gray-100  hover:border-blue-600  hover:bg-blue-600 "
            >
              {startValue + idx + 1}
            </button>
            <button
              key={startValue + idx + 1}
              disabled={page === startValue + idx + 1}
              onClick={() => changePage(startValue + idx + 1)}
              className="px-2 py-1 text-sm text-gray-500 rounded-md   hover:bg-gray-100"
            >
              {startValue + idx + 1}
            </button>
          </li>

        ))}

        <button>...</button>
        <button onClick={() => changePage(pages)}>{pages}</button>
      </>
    );

    if (page > 5) {
      if (pages - page >= 5) {
        middlePagination = (
          <>
            <button onClick={() => changePage(1)}>1</button>
            <button>...</button>
            <button onClick={() => changePage(startValue)}>{startValue}</button>
            {[...Array(5)].map((_, idx) => (
              <button
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                onClick={() => changePage(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </button>
            ))}

            <button>...</button>
            <button onClick={() => changePage(pages)}>{pages}</button>
          </>
        );
      } else {
        let amountLeft = pages - page + 5;
        middlePagination = (
          <>
            <button onClick={() => changePage(1)}>1</button>
            <button>...</button>
            <button onClick={() => changePage(startValue)}>{startValue}</button>
            {[...Array(amountLeft)].map((_, idx) => (


              <li>
                <button
                  key={startValue + idx + 1}
                  disabled={page === startValue + idx + 1}
                  style={
                    pages < startValue + idx + 1 ? { display: "none" } : null
                  }
                  onClick={() => changePage(startValue + idx + 1)}
                  className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white  border border-gray-100  hover:border-blue-600  hover:bg-blue-600 "
                >
                  {startValue + idx + 1}
                </button>
              </li>




            ))}
          </>
        );
      }
    }
  }

  return (
    pages >= 1 && (
      <div>







        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => changePage((page) => page - 1)}
            disabled={page === 1}
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100   "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <span>previous</span>
          </button>
          <div className="items-center hidden lg:flex gap-x-3">



            {middlePagination}
          </div>
          <button
            onClick={() => changePage((page) => page + 1)}
            disabled={page === pages}
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100   "
          >
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};

export default TablePagination;
