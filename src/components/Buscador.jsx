import React, { useEffect, useState } from "react";

export const Buscador = ({ digimonData, setDigimonFilteredData }) => {
  const [input, setInput] = useState("");
  useEffect(() => {
    setDigimonFilteredData(
      digimonData.filter((digimon) =>
        digimon.name.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [input]);
  const filterData = (e) => {
    setInput(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
        marginBottom: "1rem",
        width: "100vw",
      }}
    >
      <input
        type="text"
        placeholder="Busque una carta de digimon"
        value={input}
        onChange={(e) => filterData(e)}
        style={{
          backgroundColor: "white",
          width: "30%",
          textAlign: "center",
          borderRadius: "8px",
        }}
      ></input>
    </div>
  );
};
