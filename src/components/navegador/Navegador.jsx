import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Navegador = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
            <i className="bi bi-code"></i>
            SportReact
            <i className="bi bi-dpad"></i>
            <i className="bi bi-code-slash"></i>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#footBall">Football</Nav.Link>
            <Nav.Link href="#baseBall">Baseball</Nav.Link>
            <Nav.Link href="#pricing">Tennis</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
