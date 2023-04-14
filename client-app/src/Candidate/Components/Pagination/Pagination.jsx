import "./Pagination.css";

const Pagination = ({ page, pages, changePage }) => {
  let middlePagination;

  if (pages <= 5) {
    middlePagination = [...Array(pages)].map((_, idx) => (
      <button
        key={idx + 1}
        onClick={() => changePage(idx + 1)}
        disabled={page === idx + 1}
      >
        {idx + 1}
      </button>
    ));
  } else {
    const startValue = Math.floor((page - 1) / 5) * 5;

    middlePagination = (
      <>
        {[...Array(5)].map((_, idx) => (
          // <button
          //   key={startValue + idx + 1}
          //   disabled={page === startValue + idx + 1}
          //   onClick={() => changePage(startValue + idx + 1)}
          // >
          //   {startValue + idx + 1}
          // </button>
          <li>
            <button
              key={startValue + idx + 1}
              disabled={page === startValue + idx + 1}
              onClick={() => changePage(startValue + idx + 1)}
              className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white  border border-gray-100  hover:border-blue-600  hover:bg-blue-600 "
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
    pages > 1 && (
      <div className="pagination">
        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
          <div className="md:col-span-12 text-center">
            <nav aria-label="Page navigation example">
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <button
                    onClick={() => changePage((page) => page - 1)}
                    disabled={page === 1}
                    className=" w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white  ltr:rounded-l-3xl rtl:rounded-r-3xl hover:text-white border border-gray-100  hover:border-blue-600  hover:bg-blue-600 "
                  >
                    &#171;
                  </button>
                </li>


                {middlePagination}

                <li>
                  <button

                    onClick={() => changePage((page) => page + 1)}
                    disabled={page === pages}
                    className=" w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white  ltr:rounded-r-3xl rtl:rounded-l-3xl hover:text-white border border-gray-100  hover:border-blue-600  hover:bg-blue-600 "
                  >
                    &#187;
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          {/*end col*/}
        </div>


      </div>
    )
  );
};

export default Pagination;
