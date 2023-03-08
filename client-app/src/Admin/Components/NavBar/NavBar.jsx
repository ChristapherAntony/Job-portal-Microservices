import "./NavBar.scss";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const NavBar = () => {
    //   const { dispatch } = useContext(DarkModeContext);

    return (
        <div className="navbar">
            <div className="wrapper">

                <div className="items">

                    <div className="item">
                        <DarkModeOutlinedIcon
                            className="icon"
                        //   onClick={() => dispatch({ type: "TOGGLE" })}
                        />
                    </div>

                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="counter">2</div>
                    </div>

                    <div className="item">
                        <span>Admin</span>
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="avatar"
                        />
                    </div>
                    <div className="item">
                        <LogoutOutlinedIcon className="icon" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
