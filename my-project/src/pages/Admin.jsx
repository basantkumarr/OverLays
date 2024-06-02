import { useState } from "react";
import axios from "axios";
import HeaderAdmin from "./HeaderAdmin";
 const Admin = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('');
  const [quant, setQuant] = useState('');
  const [showPopup, setShowPopup] = useState(false);
 axios.defaults.withCredentials = true;

 
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://over-lays-server.vercel.app/pd', { name, price, img, color,quant, category }, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
    .then(result => {
      console.log(result.data);
      setShowPopup(true); // Show popup message
      // Clear form fields
      setName('');
      setPrice('');
      setImg('');
      setColor('');
      setQuant('');
      setCategory('');

    })
    .catch((err) => {
      console.error(err);
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex  row all  justify-center">

 <div className='flex justify-center'> <HeadeAdmin></HeadeAdmin>
</div>   
<div className="mx-5 ">

        <div className="text-center text-slate-800  py-4 text-3xl font-semibold">
          Add Data
        </div>

        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">Product Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Price in $</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />
          </div>
          <div className="col-12">
            <label className="form-label">Image Link</label>
            <input
              type="text"
              className="form-control"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder="https://abcde"
            />
          </div>
          <div className="col-12">
            <label className="form-label">Color</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="form-control"
              placeholder="Blue"
            />
          </div>
          
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">Category</label>
            <select id="inputState" value={category} onChange={(e) => setCategory(e.target.value)} className="form-select">
              <option defaultValue>Choose...</option>
              <option>T-Shirt</option>
              <option>Women</option>
              <option>Jackets</option>
              <option>Jogger/Pants</option>
              <option>Hoodie</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">No of peice stocked up</label>
            <input type="number" value={quant} onChange={(e) => setQuant(e.target.value)} className="form-control" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn w-100 btn-dark">ADD STUFF</button>
          </div>
        </form>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Product Added Successfully!</h2>
            <button className="btn pt-2 btn-dark" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .popup-inner {
          background: white;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
        }
      `}</style>
     </div>
  );
};

export default Admin;
