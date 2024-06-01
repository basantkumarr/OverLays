import { Link } from 'react-router-dom';
import Features from './Feature';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:3000/user`, { name, password, email }, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    }).then(result => {
      console.log(result.data);
      // Clear form fields
      setName('');
      setEmail('');
      setPassword('');
      
      navigate("/login");
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div>
      <div className="container">
      <div className='text-center text-slate-800 pb-4 xs:py-1 text-5xl font-semibold'>
  Signup    </div>
        <div className="px-4 py-1 my-2 text-center">
          <div className="col-md-10 mx-auto col-lg-5">
            <form onSubmit={handlesubmit} className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="form-control"
                  placeholder="Mohit"
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="name@example.com"
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
                  value={password}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-dark" type="submit">
                SIGN UP
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary text-lg font-bold">
                <span>Already Signed? <Link to="/login" className='underline'> Log In</Link></span>
              </small>
            </form>
          </div>
        </div>
        <Features />
      </div>
    </div>
  );
};

export default SignUp;
