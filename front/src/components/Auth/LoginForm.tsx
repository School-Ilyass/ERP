import { useEffect, useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import "./style.css";

import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const notify = () => toast("Incorrect credentials");

  const handleSubmit = (event: any) => {
    event.preventDefault(); // to prevent the behavior of the browser which is in this case reload the page
    
    if(email == "admin@admin.com")
      navigate("/dashboard");
    else
      notify();
      
  };

  useEffect(()=>{

    if(!email)
      return;
    if(!email.includes("@"))
      document.getElementById("EmailInput")!.style.border="1px solid red";
    else
      document.getElementById("EmailInput")!.style.border="1px solid white";
    
  },[email])

  
  
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
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </form>
  );
}

export default LoginForm;