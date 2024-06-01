import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Features from './Feature';

const Passkey = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const KEY = "4321"; // Ensure this matches the type used for comparison

  const handleClick = (e) => {
    e.preventDefault();

    if (password === KEY) {
      navigate("/adminn");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="container">
      <div className="px-4 py-1 my-2 text-center">
        <div className="col-md-10 mx-auto col-lg-5">
          <form onSubmit={handleClick} className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            
            <button className="w-100 btn btn-lg btn-dark" type="submit">
              Go to Admin Page
            </button>
            <hr className="my-4" />
            <small className="text-body-secondary text-lg font-bold">
              <span>Back to <Link  className='underline' to="/">Home</Link></span>
            </small>
          </form>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Passkey;
