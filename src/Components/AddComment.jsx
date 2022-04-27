import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const AddComment = (props) => {
  //   const [comment, setComments] = useState("");
  //   const [rate, setRate] = useState(1);
  //   const [elementId, setElementId] = useState(props.id);

  const [commentInfo, setCommentInfo] = useState({
    comment: "",
    rate: 1,
    elementId: props.id,
  });

  const sendComments = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(commentInfo),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NTA2Mjg1NTksImV4cCI6MTY1MTgzODE1OX0.8rQ_g15Jrg8J1lJiYktntoJnA5uevfWv3jAdTA7GAGw",
          },
        }
      );

      if (response.ok) {
        console.log("data sent");
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={sendComments}>
      <Form.Group key={props.id}>
        <Form.Label>Your comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="comment here"
          value={commentInfo.comment}
          onChange={(e) =>
            setCommentInfo({
              ...commentInfo,
              comment: e.target.value,
            })
          }
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Rate</Form.Label>
        <Form.Control
          as="select"
          value={commentInfo.rate}
          onChange={(e) =>
            setCommentInfo({
              ...commentInfo,
              rate: e.target.value,
            })
          }
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddComment;
