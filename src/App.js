import Bill from "./Bill";
import Amount from "./Amount";
import React, { useState } from "react";

function App() {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const properties = {
    tip,
    bill,
    numberOfPeople,
    setBill,
    setTip,
    setNumberOfPeople,
  };
  return (
    <div>
      <h1 className="title">
        Spli
        <br />
        tter
      </h1>

      <article className="calculator__app">
        <Bill {...properties} />

        <Amount {...properties} />
      </article>
    </div>
  );
}

export default App;
