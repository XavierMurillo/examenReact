import "./App.css";
import { Buscador } from "./components/Buscador";
import { MiApi } from "./components/MiApi";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function App() {
  const [digimonData, setDigimonData] = useState([]);
  const [digimonFilteredData, setDigimonFilteredData] = useState([]);
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Buscador de cartas de Digimon Trading Card Game
      </h1>
      <Buscador
        digimonData={digimonData}
        setDigimonFilteredData={setDigimonFilteredData}
      />
      <MiApi
        digimonData={digimonData}
        setDigimonData={setDigimonData}
        setDigimonFilteredData={setDigimonFilteredData}
        digimonFilteredData={digimonFilteredData}
      />
    </>
  );
}

export default App;
