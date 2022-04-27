import { useState } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Card
        key={props.book.asin}
        className="m-1"
        value={selected}
        onClick={() => setSelected(!selected)}
        style={{ border: selected ? "2px solid red " : "none" }}
      >
        <Card.Img
          variant="top"
          src={props.book.img}
          style={{ height: "300px" }}
        />
        <Card.Body>
          <Card.Title className="wrapper">{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
      {selected && <CommentArea elementId={props.book.asin} />}
    </>
  );
};

export default SingleBook;
