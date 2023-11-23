import Form from "react-bootstrap/Form";

export const Buscador = ({ search, setSearch }) => {
  return (
    <div
      style={{
        width: "40%",
      }}
    >
      <Form.Control
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Buscar"
      />
    </div>
  );
};
