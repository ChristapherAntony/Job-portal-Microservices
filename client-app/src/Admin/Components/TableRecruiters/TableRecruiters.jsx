import "./Table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {  blockRecruiters, getRecruiters, unblockRecruiters } from "../../../utils/Constants";

const TableRecruiters = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])

  useEffect((key) => {
    getUsersList()
  }, [])

  const getUsersList = () => {
    axios.get(getRecruiters).then((response) => {
      console.log(response);
      setUsers(response.data)
      console.log(response)
    }).catch((error) => {
      console.log(error);
    })
  }

  const blockUser = (id) => {
    // make an API call to block the user
    console.log("pi call ------------",id);
  
    axios.post(blockRecruiters(id)).then((response) => {

      getUsersList()
      console.log(`Blocked user with id ${id}`);
    }).catch((error) => {
      console.log(error);
    })

  }

  const unblockUser = (id) => {
    axios.post(unblockRecruiters(id)).then((response) => {

      getUsersList()
      console.log(`Unblocked user with id ${id}`);
    }).catch((error) => {
      console.log(error);
    })

  }

  const userColumns = [
    {
      field: "serialNumber",
      headerName: "#",
      width: 70,
      renderCell: (params) => {
        return <div>{params.rowIndex + 1}</div>;
      },
    },
    { field: "_id", headerName: "ID", width: 120 },
    {
      field: "user_name",
      headerName: "User",
      width: 230,
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "phone_number",
      headerName: "User Since .",
      width: 150,
    },
    {
      field: "is_blocked",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        let status = params.row.is_blocked ? "Blocked" : "Active";
  
        return (
          <div className={`cellWithStatus ${params.row.is_blocked}`}>
            {status}
          </div>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            {params.row.is_blocked ? (
              <button
                className="button"
                onClick={() => unblockUser(params.row._id)}
              >
                Unblock
              </button>
            ) : (
              <button
                className="button"
                onClick={() => blockUser(params.row._id)}
              >
                Block
              </button>
            )}
          </div>
        );
      },
    },
  ];
  




  return (
    <div className="datatable">

      <DataGrid
        className="datagrid"
        rows={users}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row._id}
      />

    </div>
  );
};

export default TableRecruiters;
