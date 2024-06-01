import React, { useEffect, useState } from 'react';
import hero from '../assets/heroimg.webp';
import main1 from '../assets/main1.webp';
import { Link } from 'react-router-dom';
import main2 from '../assets/main2.webp';
import mainb1 from '../assets/mainb1.webp';
import mainb2 from '../assets/mainb2.webp';
import main3 from '../assets/main3.webp';
import main3b from '../assets/main3b.webp';
import Carousel from "../Components/Carousel"
const Home = () => {
  const images = [main1, main2];
  const image2 = [mainb1, mainb2];
  const image3 = [hero, main3b];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const interval = setInterval(carousel, 3000); // Change image every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div>
{/* hero */}

<Link to='/shop' >
      <div>
        <img src={main3} alt="Hero" />
      </div>
      </Link>



{/* mainimg */}

      <div className="w3-content w3-section my-14" style={{ maxWidth: '100%' }}>
        {images.map((image, index) => (
          <img
            key={index}
            className="mySlides"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ display: currentIndex === index ? 'block' : 'none', width: '100%' }}
          />
        ))}
      </div>




{/* carouse 1 */}


<div className="container    flex   justify-center"><div className="d-flex flex-col   "><h1 className="heading h1">JUST LAUNCHED! 🚀</h1><p className="block m-auto ">Summer Blues :  Ultra Soft T-shirts </p></div>
      </div>
<Carousel category={"T-Shirt"}></Carousel>



{/* mainb2 */}
<div className="w3-content w3-section my-14" style={{ maxWidth: '100%' }}>
        {image2.map((image2, index) => (
          <img
            key={index}
            className="mySlides"
            src={image2}
            alt={`Slide ${index + 1}`}
            style={{ display: currentIndex === index ? 'block' : 'none', width: '100%' }}
          />
        ))}
      </div>






{/* carouse 2 */}


<div className="container    flex   justify-center"><div className="d-flex flex-col   "><h1 className="heading h1">Winter Collection &#9731;</h1><p className="block m-auto ">Summer Blues :  Ultra Soft T-shirts </p></div>
      </div>
<Carousel category={"Jackets"}></Carousel>

<div className="w3-content w3-section my-14" style={{ maxWidth: '100%' }}>
        {image3.map((image, index) => (
          <img
            key={index}
            className="mySlides"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ display: currentIndex === index ? 'block' : 'none', width: '100%' }}
          />
        ))}
      </div>


<div className="container    flex   justify-center"><div className="d-flex flex-col   "><h1 className="heading h1">Women Collection &#x2640;</h1><p className="block m-auto ">Summer Blues :  Ultra Soft T-shirts </p></div>
      </div>
<Carousel category={"Women"}></Carousel>






    </div>
  );
};

export default Home;
