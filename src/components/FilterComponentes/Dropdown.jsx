import React from 'react';
import './Dropdown.css'; // Asegúrate de crear un archivo CSS para los estilos

const Dropdown = ({ id, label, items }) => {
  const handleLinkClick = () => {
    const checkbox = document.getElementById(id);
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  return (
    <div>
      <div className="sec-center" style={{ display: 'inline-block' }}>
        <input className="dropdown" type="checkbox" id={id} name={id} />
        <label className="for-dropdown" htmlFor={id}>
          {label} <i className="uil uil-arrow-down"></i>
        </label>
        <div className="section-dropdown">
          {items.map((item, index) => (
            <a href="#" key={index} onClick={handleLinkClick}>{item} <i className="uil uil-arrow-right"></i></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown; 