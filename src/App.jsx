import { MyApp, Navegador } from "./index.js";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
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
          <Carousel className="bg-dark">
            <Carousel.Item>
              <img
                src={land.team_logo}
                alt="LogoJuventus"
                style={{ height: "70vh" }}
              />
              <Carousel.Caption>
                <h3 style={{ color: "orange" }}>{land.team_name}</h3>
                <p style={{ color: "orange" }}>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.designtagebuch.de/wp-content/uploads/mediathek//2013/02/psg-paris-saint-germain-logo-440x293.jpg"
                alt="LogoPSG"
                style={{ height: "70vh" }}
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://logowik.com/content/uploads/images/901_manchestercityfc.jpg"
                alt="LogoManchesterC"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )}
      </div>
      <div className="footBall">
        <MyApp url={urlApi} />
      </div>
      <div className="baseBall"></div>
      <div className=""></div>
    </>
  );
}

export default App;
