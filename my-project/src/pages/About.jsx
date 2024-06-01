 import img1 from "../assets/about1.jpg"
import img2 from "../assets/about2.webp"
import Features from "./Feature";


const About = () => {
  return (
    <div >
    <div className="row  mx-2 all flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img 
          src={img2} 
          className="d-block mx-lg-auto img-fluid" 
          alt="Bootstrap Themes" 
          width="300" 
          height="400" 
          loading="lazy" 
        />
      </div>
      <div className="col-lg-6 ">
        <h1 className="display-5 fw-bold text-body-emphasis  lh-1 mb-3">
        Be The CHANGE        </h1>
        <p className="lead">
        Overlays is all about bringing a CHANGE - a positive change - into people's lives. Overlays started with the intention of reaching out to the creative youth that is striving towards bringing a change in the world. To empower these creative people, Overlays believes in making something that proves to be an add-on to their creativity.        </p>
      
      </div>
    </div>







    <div className="row flex-lg-row  mx-2 all align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img 
          src={img1} 
          className="d-block mx-lg-auto img-fluid" 
          alt="Bootstrap Themes" 
          width="300" 
          height="400" 
          loading="lazy" 
        />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
        What do we stand for
        </h1>
        <p className="lead">
        To us, quality is something that cannot be compromised. We focus on refining the small details like the fabric's fitting and quality to increase their functionality in everyday life. We believe in making something unique that gives the fashion vibes and promises maximum comfort.        </p>
      
      </div>
    </div>




<Features></Features>


    </div>

  );
};

export default About;
