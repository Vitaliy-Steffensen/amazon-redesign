import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";
import PropTypes from "prop-types";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Dropdown = ({ placeholder, selected, setSelected, options }) => {
  const [isActive, setIsActive] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef?.current?.contains(event.target)) {
        setIsActive(false);
      }
    });
  }, []);

  return (
    <div className="dropdown">
      <div
        ref={menuRef}
        className="dropdown__btn"
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected.name !== "" ? selected.name : placeholder}
        <ArrowDropDownIcon />
        {isActive && (
          <div className="dropdown__content">
            {options.map((option, key) => (
              <div
                key={key}
                className="dropdown__item"
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

// Dropdown.propTypes = {
//   placeholder: PropTypes.string.isRequired,
//   selected: PropTypes.string.isRequired,
//   setSelected: PropTypes.func.isRequired,
//   options: {
//     name: PropTypes.string.isRequired,
//   },
// };
