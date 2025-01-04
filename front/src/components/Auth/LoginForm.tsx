import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import "./style.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(email, password);
  };
  
  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        placeholder="Ex: JoeDoe@Domaine.com"
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
        placeholder="Ex: 12345678"
      />
      <Button text="Login" />
      <p className="ForgotPassword">
        <a href="/forgot-password">Forgot Password?</a>
      </p>
    </form>
  );
}

export default LoginForm;