import { useEffect, useState } from 'react';
import Features from '../pages/Feature';
import axios from "axios"
import { Link } from 'react-router-dom';

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState(90); // Default value set to 90
  const [sortOrder, setSortOrder] = useState(''); // New state for sorting
 axios.defaults.withCredentials = true;
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  useEffect(() => {
    axios.get('https://over-lays-server.vercel.app/collection')
      .then(products => setProducts(products.data))
      .catch(err => console.log(err));
  }, []);

  const sortedAndFilteredProducts = products
    .filter(product => product.price <= value && product.category === category)
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') {
        return a.price - b.price;
      } else if (sortOrder === 'highToLow') {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className='w-full null py-3'>
      <div className='text-center text-slate-800 pb-4 xs:py-1 text-5xl font-semibold'>
        {category}
      </div>

      <div className='flex flex-row'>
        <div className='w-3/12 border-r pr-2 filter pr-3'>
          <h1 className='text-3xl font-semibold underline mb-4'>Filters</h1>
          
          <div className='pricefilter'>
            <h2 className='text-2xl font-semibold mb-4'>Price</h2>
            <div className="container py-1">
              <div className="flex flex-col items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={handleChange}
                  className="slider"
                  style={{ width: '100%', background: 'black', accentColor: 'black' }}
                />
                <div className="mt-2 text-lg">
                  Less than : {value}
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className='pricefilter'>
            <h2 className='text-2xl font-semibold mb-4'>
              Low to High
              <input
                className="form-check-input ml-2"
                type="radio"
                name="sortOrder"
                value="lowToHigh"
                onChange={handleSortChange}
              />
            </h2>
          </div>

          <div className='pricefilter'>
            <h2 className='text-2xl font-semibold mb-4'>
              High to Low
              <input
                className="form-check-input ml-2"
                type="radio"
                name="sortOrder"
                value="highToLow"
                onChange={handleSortChange}
              />
            </h2>
          </div>
        </div>

        <div className='w-9/12 pd pl-1'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {sortedAndFilteredProducts.map(product => (
              <Link
                key={product._id}
                to={{
                  pathname: `/product/${product._id}`,
                  state: { product }
                }}
              >
                <div className='bg-white p-4 rounded-md shadow-md'>
                  <div className='h-80 bg-gray-200 rounded-md overflow-hidden'>
                    <img
                      src={product.img}
                      alt={product.imageAlt}
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                  <div className='mt-4'>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {product.name}
                    </h3>
                    <p className='mt-1 text-sm text-gray-700'>{product.color}</p>
                    <p className='text-sm font-medium text-gray-900'>${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Features />
    </div>
  );
}

export default Products;
