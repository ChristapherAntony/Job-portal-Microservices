import "./Table.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { recruiterVerifyUrl, viewApplicationByStatus } from "../../../utils/Constants";

const Datatable = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [status, setStatus] = useState('pending')

  const getUsersList = () => {
    axios.get(`${viewApplicationByStatus}/${status}`).then((response) => {
      console.log(response.data.data)
      setUsers(response.data.data)
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getUsersList()
  }, [status])



  const handleStatusChange = (event) => {
    setStatus(event.target.value)
  }

  const acceptUser = (id) => {
    // make an API call to accept the user
    axios.post(recruiterVerifyUrl(id, 'accepted')).then((response) => {
      console.log(` user accepted with id ${id}`);
      getUsersList()
    }).catch((error) => {
      console.log(error);
    })

  }

  const rejectUser = (id) => {
    axios.post(recruiterVerifyUrl(id, 'rejected')).then((response) => {
      console.log(` user rejected with id ${id}`);
      getUsersList()
    }).catch((error) => {
      console.log(error);
    })
  }

  const viewDetails=(id)=>{
    navigate(`/admin/application/${id}`);    
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
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 120,
    },
    {
      field: "company_name",
      headerName: "Organization",
      width: 150,
    },
    {
      field: "company_location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "application_status",
      headerName: "Application Status",
      width: 150,
    },
    {
      field: "details",
      headerName: "Details",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <button
              className="button"
              onClick={() => viewDetails(params.row._id)}
            >
              View Details
            </button>
          </div>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => {
        return (
          <div>
            {params.row.application_status === "pending" ? (
              <>
                <button
                  className="button"
                  onClick={() => acceptUser(params.row._id)}
                >
                  Approve
                </button>
  
                <button
                  className="button"
                  onClick={() => rejectUser(params.row._id)}
                >
                  Reject
                </button>
              </>
            ) : (
              <div>{params.row.application_status}</div>
            )}
          </div>
        );
      },
    },
  ];




  return (
    <div className="datatable">
      <div className="datatable-header"> <span>Application Status </span>
        <select value={status} onChange={handleStatusChange}>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
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


export default Datatable;
