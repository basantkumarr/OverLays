 
const signcard = () => {
  return (
    <div className="container">
      <div className="carousel slide" id="carouselExample" data-bs-ride="carousel">
        <div className="carousel-inner text-with-icons__list hide-scrollbar">
          <div className="carousel-item active text-with-icons__item" id="block-static-text-with-icons-static-text-with-icons-0">
            <div className="text-with-icons__icon-wrapper">
              <img  
                className="text-with-icons__custom-icon" 
                style={{ maxWidth: '50px' }} 
                width="100" 
                height="100" 
                src="//overlays.co/cdn/shop/files/truck_1_100x.png?v=1679920131" 
                alt="Free & Fast Delivery" 
              />
            </div>
            <div className="text-with-icons__content-wrapper">
              <p className="heading heading--small">Free &amp; Fast Delivery</p>
              <p>Shipping within 48 hours across India.</p>
            </div>
          </div>
          <div className="carousel-item text-with-icons__item" id="block-static-text-with-icons-static-text-with-icons-1">
            <div className="text-with-icons__icon-wrapper">
              <img 
                className="text-with-icons__custom-icon" 
                style={{ maxWidth: '50px' }} 
                width="100" 
                height="100" 
                src="//overlays.co/cdn/shop/files/retweet_100x.png?v=1679920531" 
                alt="Return Policy" 
              />
            </div>
            <div className="text-with-icons__content-wrapper">
              <p className="heading heading--small">Return Policy</p>
              <p>Returns within 7 days.</p>
            </div>
          </div>
          <div className="carousel-item text-with-icons__item" id="block-static-text-with-icons-static-text-with-icons-3">
            <div className="text-with-icons__icon-wrapper">
              <img 
                className="text-with-icons__custom-icon" 
                style={{ maxWidth: '50px' }} 
                width="100" 
                height="100" 
                src="//overlays.co/cdn/shop/files/mail_100x.png?v=1679920559" 
                alt="Contact us" 
              />
            </div>
            <div className="text-with-icons__content-wrapper">
              <p className="heading heading--small">Contact us</p>
              <p>Write us at support@overlaysclothing.com</p>
            </div>
          </div>
        </div>
        <div className="carousel-indicators text-with-icons__dots dots-nav dots-nav--centered hidden-lap-and-up">
          <button 
            type="button" 
            data-bs-target="#carouselExample" 
            data-bs-slide-to="0" 
            className="active" 
            aria-current="true" 
            aria-label="Slide 1"
          ></button>
          <button 
            type="button" 
            data-bs-target="#carouselExample" 
            data-bs-slide-to="1" 
            aria-label="Slide 2"
          ></button>
          <button 
            type="button" 
            data-bs-target="#carouselExample" 
            data-bs-slide-to="2" 
            aria-label="Slide 3"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default signcard;
