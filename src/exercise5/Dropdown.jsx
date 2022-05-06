import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

export default function Dropdown({ header, children }) {
  const [isOpen, toggleDropdown] = useState(false);

  return (
    <div className="Dropdown">
      <div className="Dropdown__header" onClick={() => toggleDropdown(!isOpen)}>{header}</div>
      {isOpen && <div className="Dropdown__content">{children}</div>}
    </div>
  );
}

Dropdown.propTypes = {
  header: PropTypes.any.isRequired
};
