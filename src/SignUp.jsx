import { useState } from "react";
import { API_URL } from "./env";
import { Button, Stack } from "react-bootstrap";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = () => {
    fetch(`${API_URL}/account/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "rafal",
        lastName: "sz",
        email,
        password,
        confirmPassword,
      }),
    })
      .then((response) => {
        console.log(response); // Loguje pełną odpowiedź z serwera
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text(); // Zwraca odpowiedź jako tekst
      })
      .then((text) => {
        try {
          const data = JSON.parse(text); // Próba parsowania tekstu do JSON
          console.log(data); // Loguje sparsowane dane
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
        value={password}
        placeholder="Enter your password here"
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <input
        value={confirmPassword}
        placeholder="Confirm your password here"
        onChange={(ev) => setConfirmPassword(ev.target.value)}
      />
      <Button variant="secondary" onClick={handleClick}>
        Sign Up
      </Button>
    </Stack>
  );
};
export default SignUp;
