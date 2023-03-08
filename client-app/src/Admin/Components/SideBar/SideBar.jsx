import "./SideBar.scss";
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

const SideBar = () => {
    //   const { dispatch } = useContext(DarkModeContext);
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
                    <Link to='/admin/home'>
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
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <CreditScoreOutlinedIcon className="icon" />
                            <span>Applications</span>
                        </li>
                    </Link>
                    <li>
                        <HailOutlinedIcon className="icon" />
                        <span>Recruiters</span>
                    </li>
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
                            <span>Logout</span>
                        </li>
                    </div>


                </ul>
            </div>

        </div>
    );
};

export default SideBar;
