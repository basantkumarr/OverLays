import React, { useState } from 'react';
import './App.css'; // You may want to add your styles here

const Sider = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const w3_open = () => {
    setSidebarOpen(true);
  };

  const w3_close = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      {/* Sidebar */}
      <div className={`w3-sidebar w3-bar-block ${sidebarOpen ? 'w3-show' : 'w3-hide'}`} style={{ zIndex: 5 }} id="mySidebar">
        <button className="w3-bar-item w3-button w3-xxlarge" onClick={w3_close}>Close &times;</button>
        <a href="#" className="w3-bar-item w3-button">Link 1</a>
        <a href="#" className="w3-bar-item w3-button">Link 2</a>
        <a href="#" className="w3-bar-item w3-button">Link 3</a>
      </div>

      {/* Overlay */}
      {sidebarOpen && }

      {/* Page Content */}
      <div>
        <button className="w3-button w3-white w3-xxlarge" onClick={w3_open}>&#9776;</button>
        <div className="w3-container">
          <h1>Sidebar Overlay</h1>
          <p>The w3-overlay class can be used to create an overlay effect, when opening the sidebar. The w3-overlay class adds a black background with a 50% opacity to the "page content" - this effect will "highlight" the side navigation</p>
          <p>Click on the "hamburger menu" to see the effect.</p>
        </div>
      </div>
    </div>
  );
};

export default Side;
