import { ListGroup, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const CommentList = (props) => {
  const deleteComment = async (commentID) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentID,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NTA2Mjg1NTksImV4cCI6MTY1MTgzODE1OX0.8rQ_g15Jrg8J1lJiYktntoJnA5uevfWv3jAdTA7GAGw",
          },
        }
      );

      if (response.ok) {
        console.log("Comment GONE");
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return props.arrayComments.map((singleComment) => (
    <ListGroup.Item key={singleComment._id}>
      {singleComment.comment}
      <Button
        variant="danger"
        className="float-right p-1"
        onClick={() => deleteComment(singleComment._id)}
      >
        <i className="bi bi-trash3-fill"></i>
      </Button>
    </ListGroup.Item>
  ));
};

export default CommentList;
