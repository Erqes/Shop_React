import { useState } from "react";
import { API_URL } from "./env";
import { Button, Stack } from "react-bootstrap";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    fetch(`${API_URL}/account/forgotpassword`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email),
    })
      .then((response) => {
        console.log(response); // Loguje pełną odpowiedź z serwera
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        if (response.ok) {
          alert("Email has been send");
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
    <Stack className="col-md-5 mx-auto">
      <input
        value={email}
        placeholder="Enter your email here"
        onChange={(ev) => setEmail(ev.target.value)}
        className=""
      />
      <Button variant="secondary" onClick={handleClick}>
        Send
      </Button>
    </Stack>
  );
};
export default ForgotPassword;
