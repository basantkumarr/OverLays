import React from 'react'
import Features from './Feature'

const Contact = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
     <h1 className="display-5 fw-bold text-body-emphasis">Contact Us</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">If you have any queries you can reach us at support@overlaysclothing.com.

You can also use WhatsApp at the right bottom corner of the website!</p>
<p>------------------------</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
       <p>Manufactured by:- <br />
Overlays Clothing Pvt Ltd
16TH FLOOR, UNIT NUMBER 1617, PLOT NO. 58, LOGIX CITY CENTRE, BLOCK- BW, SECTOR 32, NOIDA, Gautam Buddha Nagar, Uttar Pradesh, 201301</p>
      </div>
    </div>
  </div>



  <Features></Features>
    </div>
  )
}

export default Contact
