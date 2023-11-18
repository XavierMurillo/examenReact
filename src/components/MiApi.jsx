import React, { useEffect, useState } from "react";

export const MiApi = ({
  digimonData,
  setDigimonData,
  setDigimonFilteredData,
  digimonFilteredData,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setDigimonFilteredData(digimonData);
    setIsLoading(false);
  }, [digimonData]);
  const getData = async () => {
    try {
      const res = await fetch(
        "https://digimoncard.io/api-public/search.php?type=digimon&series=Digimon Card Game"
      );
      const data = await res.json();
      setDigimonData(
        data
          .slice(0, 100)
          .sort((d1, d2) =>
            d1.name > d2.name ? 1 : d1.name < d2.name ? -1 : 0
          )
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="container"
      style={{ overflow: "auto", height: "80vh", border: "5px solid black" }}
    >
      <div className="row">
        {!isLoading && digimonFilteredData.length > 0 ? (
          digimonFilteredData.map((digimon) => {
            return (
              <div
                className="col-lg-3 col-sm-12"
                style={{ display: "flex", direction: "column" }}
                key={digimon.cardnumber}
              >
                <img
                  src={digimon.image_url}
                  style={{ width: "55%", marginBottom: "1rem" }}
                />
                <div
                  style={{
                    width: "40%",
                    marginLeft: "1rem",
                  }}
                >
                  <p style={{ textAlign: "center", fontWeight: "bolder" }}>
                    {digimon.name}
                  </p>
                  <span style={{ fontWeight: "bold" }}>Stage:</span>
                  <span className="digimonInfo">{digimon.stage}</span>
                  <br />
                  <p style={{ fontWeight: "bold" }} className="digimonInfo">
                    Attribute:
                  </p>
                  <span className="digimonInfo"> {digimon.attribute}</span>
                  <br />
                  <p style={{ fontWeight: "bold" }} className="digimonInfo">
                    Digi Type:
                  </p>
                  <span className="digimonInfo">{digimon.digi_type}</span>
                  <br />
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bolder",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {digimon.cardnumber}
                  </p>
                  <p style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                    Card color
                  </p>
                  <div
                    style={{
                      border: "5px solid",
                      borderColor: digimon.color.toLowerCase(),
                    }}
                  ></div>
                </div>
              </div>
            );
          })
        ) : (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        )}
      </div>
    </div>
  );
};
