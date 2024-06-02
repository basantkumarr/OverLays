import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true; // Set once at the top if needed

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  
  return (
    <button
      className={`${className} slick-prev slick-arrow`}
      style={{ ...style, display: "block", background: "grey", paddingTop: "1px" }}
      onClick={onClick}
    >
      &#8249;
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-next slick-arrow`}
      style={{ ...style, display: "block", background: "grey", paddingTop: "1px" }}
      onClick={onClick}
    >
      &#8250;
    </button>
  );
};

const Carousel = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://over-lays-server.vercel.app/collection')
      .then(response => setProducts(response.data))
      .catch(err => console.log(err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Slider {...settings}>
          {products.filter(product => product.category === category).map((product) => (
            <Link
              key={product._id}
              to={{
                pathname: `/product/${product._id}`,
                state: { product }
              }}
            >            
              <div className="group relative px-2">
                <div className="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                  <img
                    src={product.img}
                    alt={product.alt} // Assuming 'alt' is the correct field for alt text
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-l font-semibold text-gray-900">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
