import React, { useState } from "react";

const Form = ({ setName }) => {
  const [currName, setCurrName] = useState("--");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setName(currName);
        }}
      >
        <input
          type="text"
          value={currName}
          onChange={(e) => {
            setCurrName(e.target.value);
          }}
        ></input>
        <button type="submit">Sumbit!</button>
      </form>
      <h1>We're gonna change our name to: {currName}</h1>
    </>
  );
};

export default Form;
