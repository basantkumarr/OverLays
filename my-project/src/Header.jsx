import { useState } from "react";
import logo from "./assets/OverLaysLogo.avif";
import { Link } from "react-router-dom";
import Login from "./pages/Login";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const w3_open = () => {
    setSidebarOpen(true);
  };

  const w3_close = () => {
    setSidebarOpen(false);
  };

  return (
    <div
       className="min-h-full     sticky  z-50 top-0"
    >

{true}

{/* whatsapp */}
<div className="dropdown position-fixed bottom-0 end-0 mb-4 me-3 bd-mode-toggle">
     <a href="https://wa.me/918222864990" target="_blank"> <button className="btn btn-bd-primary  py-2   d-flex align-items-center bg-green-500" id="bd-theme" type="button"    aria-label="Toggle theme (light)">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>       </button>
</a>
     
    </div>






    <div className="w-full all px-8" style={{ backgroundColor: "white" }}>

        <header    style={{ backgroundColor: "white" }}  className="border-bottom w-full lh-1 py-1  " >
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-0">
              <div>
                <div
                  className={`w3-sidebar   w3-bar-block ${
                    sidebarOpen ? "w3-show" : "w3-hide"
                  }`}
                  style={{ zIndex: 5 }}
                  id="mySidebar"
                >
                  <button
                    className="w3-bar-item      d-flex
                    w3-button   w3-xxlarge"
                    onClick={w3_close}
                  >
                    Close<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi pt-1 bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
                  </button>
                  <hr />
                  <Link
                    to="/"
                    onClick={w3_close}
                    className="w3-item mt-3 w3-button"
                  >
                    Home
                  </Link>

                  <Link
                    to="/shop"
                    onClick={w3_close}
                    className="w3-item w3-button"
                  >
                    Shop All
                  </Link>
                  <Link
                    to="/tshirt"
                    onClick={w3_close}
                    className="w3-item w3-button"
                  >
                    T-Shirt{" "}
                  </Link>
                  <Link
                    to="/jacket"
                    onClick={w3_close}
                    className="w3-item w3-button"
                  >
                   Jackets
                  </Link>
                  <Link
                    to="/jogger"
                    onClick={w3_close}
                    className="w3-item w3-button"
                  >
                    Joggers
                  </Link>
                  <Link
                    to="/tshirt"
                    onClick={w3_close}
                    className="w3-item w3-button"
                  >
                    Sale
                  </Link>
                  <Link
                    to="/women"
                    onClick={w3_close}
                    className="w3-item w3-button"
                  >
                    Women
                  </Link>
                  <Link
                    to="/contact"
                    onClick={w3_close}
                    className="w3-item w3-button"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/about"
                    onClick={w3_close}
                    className="w3-item w3-button"
                  >
                    About Us
                  </Link>


                  <Link   onClick={w3_close}
                    className="w3-bar-item font-semibold w3-button" to="/passkey">
Admin Panel            </Link>
                </div>

                {sidebarOpen && (
                  <div
                    className="w3-overlay"
                    onClick={w3_close}
                    style={{ cursor: "pointer" }}
                    id="myOverlay"
                  ></div>
                )}

                <div>
                  <button
                    className=" w-btn  text-3xl   xs:text-3xl     text-gray-800   w3-white      "
                    onClick={w3_open}
                  >
                    &#9776;
                  </button>
                </div>
              </div>
            </div>



            
            <div className="col-4 d-flex justify-content-center">
              
<Link to="/">
              <img src={logo} className="w-16" alt="Overlays" />
              </Link>
            </div>
 



            <div className="col-4 d-flex  justify-content-end gap-2 align-items-center">
              <Link className=" text-gray-800 lowernav" to="/passkey" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-badge" viewBox="0 0 16 16">
  <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
</svg>
              </Link>
              <Link className=" text-gray-800" to="/login" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </Link>

              <Link className="  text-gray-800" to="/cart" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-cart-dash"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </Link>
            </div>
          </div>
        </header>
<div className=" lowernav">
        <div className="nav-scroller py-1     border-bottom">
          <nav className="nav py-2 nav-underline  justify-content-center gap-9">
            <Link className="nav-item nav-link link-body-emphasis " to="/">
              Home
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="shop">
              Shop All
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/tshirt">
              T-Shirt
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/jacket">
Jackets            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/jogger">
             Joggers
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/women">
              Women
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/about">
              About
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/contact">
              Contact Us
            </Link>
     
          </nav>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
