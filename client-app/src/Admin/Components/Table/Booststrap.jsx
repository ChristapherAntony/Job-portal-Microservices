import React from 'react'


function Table2() {

  return (




    <div>
      <div className="search-bar">
        <input
          type="text"
          name="query"
          placeholder="Search"
          title="Enter search keyword"
        //   onChange={searchBy}
        />


      </div>
      <table className="table table-bordered  " id="myTable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        
            <tr>
              <td>1</td>
              <td>"dsad"</td>
              <td>"jfkdsjfkdl"</td>
              <td><button type="button"  className="btn badge rounded-pill bg-danger">Delete</button></td>
              <td><button type="button" className=" btn   badge rounded-pill bg-secondary"> Edit </button></td>
            </tr>

         

        </tbody>
      </table>
    </div>

  )
}

export default Table2