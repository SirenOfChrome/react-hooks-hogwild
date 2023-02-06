import React, { useState } from "react";
import Hogs from "./Hogs";
import Nav from "./Nav";
import hogs from "./porkers_data";

const App = () => {
  const [filteredHogs, setFilteredHogs] = useState(hogs);
  const [sortMethod, setSortMethod] = useState("");

  const handleFilter = (greased) => {
    const filtered = hogs.filter((hog) => hog.greased === greased);
    setFilteredHogs(filtered);
  };

  const handleSort = (sortMethod) => {
    setSortMethod(sortMethod);
    setFilteredHogs(
      filteredHogs.sort((a, b) => {
        if (sortMethod === "name") {
          return a.name.localeCompare(b.name);
        }
        return a.weight - b.weight;
      })
    );
  };

  return (
    <div className="ui grid container">
      <Nav onFilter={handleFilter} onSort={handleSort} />
      <Hogs hogs={filteredHogs} />
    </div>
  );
};

export default App;
//