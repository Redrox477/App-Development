import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import { Outlet, Link ,useNavigate, redirect } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); 
    navigate("/");
  };

  return (
    <div className='full-page'>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-dark text-light sidebar">
          <div>
          <h2>FOH Dashboard</h2>
          <ul className="list-unstyled" >
            <li style={{backgroundColor:'wheat'}}>
              <a href="#dashboard"style={{color:'black',fontWeight:'bolder',fontSize:'x-large'}}>Orders</a>
            </li>
            <li>
              <a href="#users">New Order</a>
            </li>
            <li>
              <a href="#products">Grievance</a>
            </li>
            <li>
              <a href="#orders">Profile</a>
            </li>
          </ul>
            </div>
            <img src='https://th.bing.com/th/id/R.9700cd218f68e8f784c71bbbdc6d6f98?rik=tdCbPulzVhpRvA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-chef%2ftransparent-chef-3.png&ehk=8kbTN1W4tczmpEtYg5Cdwc%2foefRXS98iBpYz969BZb0%3d&risl=&pid=ImgRaw&r=0'
            />
            <button className='btn btn-danger' onClick={handleClick}><b>log out</b></button>
        </div>
        <div className="col-md-10 content">
          <div className="container">
            <div className='banner'>
              <img src="https://gharpekhana.files.wordpress.com/2015/08/cropped-1890_1a_c_photography_restaurants___food_162.jpg" 
              className='img-fluid' width={'1000px'}/>
            </div>
        </div>
      </div> 
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
