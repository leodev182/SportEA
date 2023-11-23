import { Bbutton, MyApp, Navegador } from "./index.js";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

import "./App.css";
const urlApi =
  "https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=96&APIkey=dc9ad7cd5e3dc0a94003754e3b5aa599b5348e1c71ebc2d52e30530a13b666e8";

function App() {
  const [loading, setLoading] = useState(true);
  const [land, setLand] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(urlApi);
      const data = await res.json();
      // console.table(data.result);
      setLand(data.result[0]);
      setLoading(false);
    };

    getData();
  }, []);
  return (
    <>
      <div className="navegador">
        <Navegador />
      </div>
      <div className="home centrar">
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <div
            style={{
              height: "70%",
              width: "80%",
              background: "white",
              display: "flex",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "40%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={land.team_logo} alt="LogoJuventus" className="imgL" />
              <h1 style={{ color: "orange" }}>{land.team_name}</h1>
              <Bbutton
                infob="ENTERATE"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          nesciunt molestias cumque consequuntur vel suscipit!"
              />
            </div>
            <div style={{ height: "20%,", width: "58%" }}>
              <div>
                <h2>Últimas Noticias</h2>
                <Bbutton
                  infob="MAS SOBRE ESTA NOTICIA"
                  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, dolorum.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, dolorum.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, dolorum."
                />
              </div>
              <div
                style={{
                  height: "80%,",
                  width: "58%",
                  paddingTop: "50px",
                }}
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/hgB9rLdJDWE?si=FIakIgpEZ0HRgth7"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="footBall">
        <MyApp url={urlApi} loading={loading} setLoading={setLoading} />
      </div>
      <div className="baseBall"></div>
      <div className=""></div>
    </>
  );
}

export default App;
