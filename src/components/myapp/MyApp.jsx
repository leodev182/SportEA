import Table from "react-bootstrap/Table";

import { useEffect, useState } from "react";
import { Buscador } from "../buscador/Buscador";

export const MyApp = ({ url, loading, setLoading }) => {
  const [elements, setElements] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    //----- Función para consumir la API, que se renderizará cuando el componente ya esté desarrollandose
    const getPlayers = async () => {
      const res = await fetch(url);
      const data = await res.json();
      const dataOrganizada = data.result[0].players.sort(
        (a, b) => -a.player_rating.localeCompare(b.player_rating)
      );

      setElements(dataOrganizada);

      setLoading(false);
    };

    getPlayers();
  }, []);

  return (
    <>
      <Buscador className="p-5" search={search} setSearch={setSearch} />
      <br />
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Nro</th>
            <th>
              T.Rojas
              <i className="bi bi-file-text-fill"></i>
            </th>
            <th>
              T.Amarillas
              <i className="bi bi-file-text"></i>
            </th>
            <th>Goles</th>
            <th>
              Ranking
              <i className="bi bi-percent"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {elements
            .filter((element) => {
              return (
                element.player_name
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                element.player_age.includes(search) ||
                element.player_number.includes(search) ||
                element.player_goals.includes(search) ||
                element.player_rating.includes(search)
              );
            })
            .map((element) => (
              <tr key={element.player_key}>
                <td>{element.player_name}</td>
                <td>{element.player_age}</td>
                <td>{element.player_number}</td>
                <td>{element.player_red_cards}</td>
                <td>{element.player_yellow_cards}</td>
                <td>{element.player_goals}</td>
                <td>
                  {element.player_rating}
                  <i className="bi bi-percent"></i>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};
