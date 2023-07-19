import React, { useEffect, useState } from 'react';
import './register.css';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link ,useNavigate, redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Logo from './chef-reg.png';
import axios from "axios";



function Register() {
    const navigate = useNavigate();
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [users, setUsers] = useState([]);


    const handleRoleChange = (event) => {
      setRole(event.target.value);
    };

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handlePwdChange = (event) => {
      setPwd(event.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      // navigate("/login");
      const register = {"role":role , "name":name , "email":email ,"pwd":pwd};
      console.log(register);
      const res = await axios.post("http://localhost:8080/addStaff",register)
      // console.log(res.data);
      if (res.data === "Signup Successful !") {
        toast.success('Signup Successful !', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else if (res.data === "Email ID Already Exists") {
        toast.error('Email Id Already Exists !', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        console.log(res.data);
        // toast.error('Invalid Username', {
        //   position: "bottom-right",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "dark",
        // });
      }
    };

  return (
    <div className='outer-cont-reg'>
      <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
    <section class="cont-reg">
  <div class="bg-opacity-90">
        <div class="card card-reg" style={{borderRadius:"1rem",marginBottom:'1rem'}}>
          <div class="row">
            <div class="col-lg-6" id='imge'>
              <img src={Logo}
                alt="login form" class="img-fluid-reg" style={{borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div class="col-lg-6 d-flex align-items-center">
              <div class="card-body p-lg-5  text-black">

                <form onSubmit={handleSubmit}>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <center><span class="h1 fw-bold mb-0 span-reg">Register Account</span></center>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Register your account</h5>

                  <div class="form-outline mb-4">
                    <select class="form-select" aria-label="Default select example" value={role} onChange={handleRoleChange} required>
                      <option value="" selected data-default>Select your role</option>
                      <option value="FOH">FOH (Front of House)</option>
                      <option value="KS"> KS (Kitchen Staff)</option>
                    </select>
                    <label class="form-label" for="form2Example17"><b>Role</b></label>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="name" id="form2Example07" class="form-control form-control-lg" value={name} onChange={handleNameChange} required/>
                    <label class="form-label" for="form2Example07">Name</label>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" value={email} onChange={handleEmailChange} required/>
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg"  value={pwd} onChange={handlePwdChange}  pattern=".{8,}"   required title="8 characters minimum" />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-danger btn-lg btn-block" type='submit'>Register</button>
                  </div>

                  {/* <a class="small text-muted" href="#!">Forgot password?</a> */}
                  <p class="mb-5 pb-lg-2" style={{color:'black'}}>Already have an account? <Link to='/login'
                      style={{color:"black"}}>Login here</Link></p>
                  <a href="/terms" class="small text-muted"><b>Terms of use.</b></a>
                  <a href="/terms" class="small text-muted"><b>Privacy policy</b></a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
</section>

</div>
  )
}

export default Register