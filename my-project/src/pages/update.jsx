import  { useEffect, useState } from 'react';
import HeadeAdmin from './HeaderAdmin'
import axios from "axios"
import { Link } from 'react-router-dom';


const Update = () => {
  const[products,setProducts]=useState([])
axios.defaults.withCredentials = true;
 

  useEffect(()=>{
    axios.get('https://over-lays-server.vercel.app/collection').then(products =>setProducts(products.data)).catch(err=>console.log(err))
  },[])





  return (
    <div>
            <div className="flex row justify-center">

 <div className='flex justify-center'> <HeadeAdmin></HeadeAdmin>
</div>  
<div className="mx-5 my-4">

        <div className="text-center text-slate-800 py-4 text-3xl font-semibold">
          Admin Panel - Update Data
        </div>


        <div className=''>
        {products.map(product => (
    <Link
      key={product._id}
      to={{
        pathname: `/updata/${product._id}`,
        state: { product }
      }}
    >
      <div className='bg-white p-4 rounded-md flex     justify-between shadow-md'>
        <div className='flex'>
        <div className='h-36   bg-gray-200 rounded-md overflow-hidden'>
          <img
            src={product.img}
            alt={product.imageAlt}
            className='h-full w-full  object-cover object-center'
          />
        </div>
        <div className='mt-4 ml-6'>
          <h3 className='text-lg font-semibold text-gray-900'>
            {product.name}
          </h3>
          <p className='mt-1 text-sm text-gray-700'> Color : {product.color}</p>
          <p className='text-sm font-medium text-gray-900'>${product.price}</p>
        </div>
        </div>
        <div className="modal-footer  ml-6 w-16 ">
        <button type="button" className="btn m-3 btn-success" data-bs-dismiss="modal">Update</button>
        <button type="button" className="btn m-3 btn-danger">Delete</button>
      </div>
      </div>
    </Link>
  ))
}


        </div>
      </div>

 

      
     </div>
      
    </div>
  )
}

export default Update
