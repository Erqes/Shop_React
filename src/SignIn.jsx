import { useState } from "react";
import { API_URL } from "./env";
import { json, Link } from "react-router-dom";
import { Button, Col, Row, Stack } from "react-bootstrap";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    fetch(`${API_URL}/account/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log();
        localStorage.setItem("token", response.body);
        return response.text(); // Zwraca odpowiedź jako tekst
      })
      .then((text) => {
        try {
          localStorage.setItem("token", text);
        } catch (error) {
          console.error("Response is not valid JSON:", error);
        }
      })
      .catch((error) => {
        console.error("There was an error with the sign-in request:", error);
      });
  };
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <input
        value={email}
        placeholder="Enter your email here"
        onChange={(ev) => setEmail(ev.target.value)}
        className=""
      />
      <input
        type="password"
        value={password}
        placeholder="Enter your password here"
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <Row className="ms-auto">
        <Col>
          <Link to={`/account/signUp`}>SignUP</Link>
        </Col>
        <Col>
          <Link to={`/account/forgotPassword`}>forgot password?</Link>
        </Col>
      </Row>

      <Button variant="secondary" onClick={handleClick}>
        Sign In
      </Button>
    </Stack>
  );
};
export default SignIn;
