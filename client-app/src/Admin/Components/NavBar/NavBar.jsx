import "./NavBar.scss";
import Axios from 'axios';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { signOut } from "../../../utils/Constants";
const NavBar = () => {
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
                Axios.post(signOut).then(res=>{
                    navigate('/admin')
                  }).catch(err=>{
                    console.log(err.response.data.errors[0].msg);
                  })
            }
        })




    };


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
                    <div className="item" onClick={logout}>
                        <LogoutOutlinedIcon className="icon" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
