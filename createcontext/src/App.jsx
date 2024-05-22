import React, { useState, createContext } from "react";
import Nabvar from "./Components/Nabvar";
import Header from "./Components/Header";

export const myContext = createContext();

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [color, setColor] = useState("");

  const myname = (event) => {
    setName(event.target.value);
  };

  const mylastname = (event) => {
    setLastName(event.target.value);
  };
  const myColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <myContext.Provider value={{name,lastname, color}}>
      <Nabvar />
      <form>
        <input
          type={"text"}
          placeholder="Name"
          value={name}
          onChange={myname}
        />
        <input
          type={"text"}
          placeholder="Name"
          value={lastname}
          onChange={mylastname}
        />

        <input
          type={"text"}
          placeholder="Enter a color"
          value={color}
          onChange={myColor}
        />
      </form>
      <Header />
    </myContext.Provider>
    
  );
}

export default App;
