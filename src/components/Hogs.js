import React from "react";

const Hogs = ({ hogs }) => {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <div key={hog.name} className="ui eight wide column">
          <h3>{hog.name}</h3>
          <img src={hog.image} alt={hog.name} />
        </div>
      ))}
    </div>
  );
};

export default Hogs;
