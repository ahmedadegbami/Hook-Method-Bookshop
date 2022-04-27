import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
  const [arrayComments, SetComments] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const [isError, SetIsError] = useState(false);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          props.elementId,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NTA2Mjg1NTksImV4cCI6MTY1MTgzODE1OX0.8rQ_g15Jrg8J1lJiYktntoJnA5uevfWv3jAdTA7GAGw",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        SetComments(data);
        SetIsLoading(false);
        SetIsError(false);
      } else {
        console.log("something went wrong");
        SetIsLoading(false);
        SetIsError(true);
      }
    } catch (error) {
      console.log(error);
      SetIsLoading(false);
      SetIsError(true);
    }
  };

  return (
    <>
      {isError && <Error />}
      {isLoading && <Loading />}
      <CommentList arrayComments={arrayComments} />
      <AddComment id={props.elementId} />
    </>
  );
};

export default CommentArea;
