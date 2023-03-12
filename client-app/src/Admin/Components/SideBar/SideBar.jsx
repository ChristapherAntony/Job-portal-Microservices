import "./SideBar.scss";
import Axios from 'axios';
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { signOut } from "../../../utils/Constants";
const SideBar = () => {
    const navigate = useNavigate();
    //   const { dispatch } = useContext(DarkModeContext);

    const logout = () => {
        console.log("btn clicked");
        Swal.fire({
            title: 'Logout?',
            text: "You won't be able to revert this!",

            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.post(signOut).then(res => {
                    navigate('/admin')
                }).catch(err => {
                    console.log(err.response.data.errors[0].msg);
                })


            }
        })

    };
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/admin/home" style={{ textDecoration: "none" }}>
                    <span className="logo">careerconnect</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to='/admin/home' style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <p className="title"></p>
                    <Link to="/admin/candidates" style={{ textDecoration: "none" }}>
                        <li>
                            <GroupsOutlinedIcon className="icon" />
                            <span>Candidates</span>
                        </li>
                    </Link>
                    <Link to="/admin/applications" style={{ textDecoration: "none" }}>
                        <li>
                            <CreditScoreOutlinedIcon className="icon" />
                            <span>Applications</span>
                        </li>
                    </Link>
                    <Link to="/admin/recruiters" style={{ textDecoration: "none" }}>
                        <li>
                            <HailOutlinedIcon className="icon" />
                            <span>Recruiters</span>
                        </li>
                    </Link>

                    <li>
                        <WorkspacePremiumOutlinedIcon className="icon" />
                        <span>Premium</span>
                    </li>

                    <div className="div-bottom">
                        <p className="title"></p>
                        <li>
                            <SettingsApplicationsIcon className="icon" />
                            <span>Settings</span>
                        </li>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>Profile</span>
                        </li>
                        <li>
                            <ExitToAppIcon className="icon" />
                            <span onClick={logout} >Logout</span>
                        </li>
                    </div>


                </ul>
            </div>

        </div>
    );
};

export default SideBar;
