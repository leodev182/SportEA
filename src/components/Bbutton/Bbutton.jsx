import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";

export const Bbutton = ({ infob, text }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {infob}
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">{text}</div>
      </Collapse>
    </>
  );
};
