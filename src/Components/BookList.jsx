import SingleBook from "./SingleBook";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useState } from "react";
import CommentArea from "./CommentArea";

const BookList = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Container>
      <Row>
        <Col md={9}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {props.books
              .filter((oneBook) =>
                oneBook.title.toLowerCase().includes(searchQuery)
              )
              .map((oneBook) => (
                <Col md={3} key={oneBook.asin}>
                  <SingleBook
                    book={oneBook}
                    changeSelectedbook={(asin) => setSelectedBook(asin)}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={3}>{/* <CommentArea elementId={oneBook.asin} /> */}</Col>
      </Row>
    </Container>
  );
};

export default BookList;
