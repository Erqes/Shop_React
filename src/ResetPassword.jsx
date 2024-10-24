import { useState } from "react";
import { API_URL } from "./env";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [searchParams] = useSearchParams();
  const user = searchParams.get("UserId");
  const token = searchParams.get("Token");
  const fetchCredentails = () => {
    fetch(`${API_URL}/account/ResetPassword`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, user, password, confirmPassword }),
    });
  };

  return (
    <div>
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
      <input type="button" value="Reset password" onClick={fetchCredentails} />
    </div>
  );
};
export default ResetPassword;
