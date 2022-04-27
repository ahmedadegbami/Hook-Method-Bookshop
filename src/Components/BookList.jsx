import SingleBook from "./SingleBook";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useState } from "react";

const BookList = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="What are you looking for?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>
      <Row>
        {props.books
          .filter((oneBook) =>
            oneBook.title.toLowerCase().includes(searchQuery)
          )
          .map((oneBook) => (
            <Col md={3} key={oneBook.asin}>
              <SingleBook book={oneBook} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
