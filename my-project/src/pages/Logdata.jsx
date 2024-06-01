import React from 'react'
import { Link } from 'react-router-dom'
const Logdata = () => {
  return (
    <div>
       <div className="text-center   text-slate-800 py-2     mt-24 text-4xl font-semibold">
You are successfully logged in....     </div>
<div className="d-grid gap-2 mt-4">
    <div className='flex  mb-24   justify-center  '>
             <Link to="/"> <button type="button" className="btn btn-dark btn-lg      mx-auto  w-96 px-4 me-md-2">Go to Home </button></Link>

             </div>
            </div>


    </div>
  )
}

export default Logdata
