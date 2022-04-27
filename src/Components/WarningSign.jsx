import { render } from "@testing-library/react";
import { Alert } from "react-bootstrap";

const WarningSign = (props) => {
  return (
    <Alert key={1} variant={props.color}>
      This is an alert
    </Alert>
  );
};

export default WarningSign;
