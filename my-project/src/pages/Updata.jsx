import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Updata = () => {
  const { productid } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('');
  const [quant, setQuant] = useState('');
axios.defaults.withCredentials = true;
 
  useEffect(() => {
    axios.get('https://over-lays-server.vercel.app/collection/${productid}')
      .then(response => {
        const { name, price, img, color, category, quant } = response.data;
        setName(name);
        setPrice(price);
        setImg(img);
        setColor(color);
        setCategory(category);
        setQuant(quant);
      })
      .catch(err => {
        console.error('Error fetching product data:', err);
      });
  }, [productid]);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3000/collection/${productid}`, { name, price, img, color, quant, category }, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then(result => {
        console.log(result.data);
        navigate("/update");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteProduct = () => {
    axios.delete(`http://localhost:3000/collection/${productid}`)
      .then(response => {
        console.log(response.data);
        navigate("/update");
      })
      .catch(err => {
        console.error('Error deleting product:', err);
      });
  };

  return (
    <div>
      <div className="mx-5 ">
      <div className="text-center text-slate-800 py-4 text-3xl font-semibold">
          Admin Panel - Update Data
        </div>


        <form className="row g-3" onSubmit={handleUpdate}>
          <div className="col-md-6">
            <label className="form-label">Product Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Product Name' className="form-control" />
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
            <label className="form-label">No of pieces stocked up</label>
            <input type="number" value={quant} onChange={(e) => setQuant(e.target.value)} className="form-control" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn w-100 btn-dark">UPDATE</button>
            <button type="button" onClick={deleteProduct} className="btn w-100 btn-danger mt-3">DELETE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Updata;
