import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

import Spinner from "react-bootstrap/Spinner";

export const Landing = ({ url, logo }) => {
  const [loading, setLoading] = useState(true);
  const [land, setLand] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.table(data.result);
      setLand(data.result[0]);
      setLoading(false);
    };

    getData();
  }, []);
  //   console.log(land.team_logo);

  return (
    <>
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
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
};
