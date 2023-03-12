import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SmallButton from "../Buttons/SmallButton";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { applicationDetails, recruiterVerifyUrl } from "../../../utils/Constants";
import './ApplicationDetails.scss'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";
export const Details = () => {
  const navigate=useNavigate()
  const [state, setState] = useState({})
  const { id } = useParams();
  useEffect(() => {
    axios.get(applicationDetails(id)).then((response) => {
      console.log(response);
      setState(response.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  const acceptUser = (id) => {
    axios.post(recruiterVerifyUrl(id, 'accepted')).then((response) => {
      console.log(` user accepted with id ${id}`);
      navigate('/admin/applications')
    }).catch((error) => {
      console.log(error);
    })
    
  }

  const rejectUser = (id) => {
    axios.post(recruiterVerifyUrl(id, 'rejected')).then((response) => {
      console.log(` user rejected with id ${id}`);
      navigate('/admin/applications')
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
      <div className='backbtn'>
        <Link to={'/admin/applications'}> 
        <SmallButton text={'Back'} onClick={() => navigate('/admin/applications')} />
        </Link>
      </div>
      <div className="topdetail">

        <div className="keys">
          <table >
            <tr>
              <td>Name</td>
              <td>{state.user_name}</td>

            </tr>
            <tr>
              <td>Company</td>
              <td>{state.company_name}</td>

            </tr>
            <tr>
              <td>Position</td>
              <td>{state.current_position}</td>

            </tr>
            <tr>
              <td>Contact</td>
              <td>{state.email}</td>

            </tr>
            <tr>
              <td>Phone </td>
              <td>{state.phone_number}</td>

            </tr>
          </table>

          <div className="profile-pic">
            <Avatar
              alt="Remy Sharp"
              src="https://picsum.photos/id/237/200/300"
              variant="square"
              sx={{
                width: 120, height: 120
              }}
            />
          </div>
        </div>

      </div>

      <h4 className="des">Company or Organization Details </h4>
      <div className="bottom">
        <div>
          <div className="logo">
            <Avatar
              alt="Remy Sharp"
              src="https://picsum.photos/id/237/200/300"
              variant="square"
              sx={{ width: 40, height: 40 }}
            />
          </div>
          <b className="co-name">{state.company_name}werewrwe</b>
          <table>
            <tr>
              <td><LanguageOutlinedIcon /></td><td>{state.company_website}</td>
            </tr>
            <tr>
              <td><EmailOutlinedIcon /></td><td>{state.company_email}</td>
            </tr>
          </table>
          <b>Address</b>
          <ul>
            <li>
              {state.company_location}
            </li>
            <li>
              {state.company_state}
            </li>
          </ul>
        </div>
        <div>
          <b>Conpany Description</b>
          <div className="description">
            {state.company_description}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quis debitis itaque atque repellat quaerat fugiat, voluptas odit rerum ratione, provident facere quasi illum inventore placeat non saepe expedita commodi quia a ipsa, dolores ex sed iste? Cumque, facere. Delectus dolorum, animi cupiditate quas numquam reprehenderit dicta commodi? Accusantium molestias sapiente distinctio earum adipisci corrupti laudantium inventore, vero voluptates. Ad officiis, dolore obcaecati fugiat blanditiis iure sunt error. Alias quas aut ducimus, rem, animi exercitationem assumenda reprehenderit dignissimos, recusandae voluptas nisi nam! Eveniet minima quisquam voluptas iure dicta incidunt laudantium facere tempora ex! Ratione sunt corrupti fugit quidem vitae suscipit!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quis debitis itaque atque repellat quaerat fugiat, voluptas odit rerum ratione, provident facere quasi illum inventore placeat non saepe expedita commodi quia a ipsa, dolores ex sed iste? Cumque, facere. Delectus dolorum, animi cupiditate quas numquam reprehenderit dicta commodi? Accusantium molestias sapiente distinctio earum adipisci corrupti laudantium inventore, vero voluptates. Ad officiis, dolore obcaecati fugiat blanditiis iure sunt error. Alias quas aut ducimus, rem, animi exercitationem assumenda reprehenderit dignissimos, recusandae voluptas nisi nam! Eveniet minima quisquam voluptas iure dicta incidunt laudantium facere tempora ex! Ratione sunt corrupti fugit quidem vitae suscipit!
          </div>


        </div>
      </div>
      <div className="lastbtn">
      <Button onClick={()=>acceptUser(state._id)}>
        <SmallButton text={'Accept'} color="success"  />
      </Button>
       <Button onClick={()=>rejectUser(state._id)}>
        <SmallButton text={'Reject'} />
       </Button>
        
      </div>



    </div>
  );
};

