  import { Link } from "react-router-dom";
import Features from './Feature';
import axios from 'axios';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
   const handlesubmit = (e) => {
    e.preventDefault();

  axios.post('https://over-lays-server.vercel.app/login', {   password, email }, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  }).then(result => {
    console.log(result.data);
    // Clear form fields
     setEmail('');
    setPassword('');
    
    navigate("/logdata");
  }).catch((err) => {
    console.error(err);
  });
};



  return (
    <div className="container">
      <div className='text-center text-slate-800 pb-4 xs:py-1 text-5xl font-semibold'>
    Login     </div>
      <div className="px-4 py-1 my-2 text-center">
        <div className="col-md-10 mx-auto col-lg-5">
          <form  onSubmit={handlesubmit} className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                 placeholder="name@example.com"
                 onChange={(e) => setEmail(e.target.value)}

              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}

              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-dark" type="submit">
              LOGIN
            </button>
            <hr className="my-4" />
            <small className="text-body-secondary text-lg     font-bold" >
           <span>New customer? <Link to="/signup" className='underline'> Sign Up</Link></span>
            </small>
          </form>
        </div>
      </div>



     <Features></Features>
    </div>
  );
};

export default Login;
