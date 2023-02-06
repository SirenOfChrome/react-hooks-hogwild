import React from "react";

const Nav = ({ onFilter, onSort }) => {
  return (
    <div className="ui two item menu">
      <button className="ui button" onClick={() => onFilter(false)}>
        Show Un-greased Hogs
      </button>
      <button className="ui button" onClick={() => onFilter(true)}>
        Show Greased Hogs
      </button>
      <button className="ui button" onClick={() => onSort("name")}>
        Sort by Name
      </button>
      <button className="ui button" onClick={() => onSort("weight")}>
        Sort by Weight
      </button>
    </div>
  );
};



export default Nav;
