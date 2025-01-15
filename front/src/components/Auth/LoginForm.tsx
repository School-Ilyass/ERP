import { useEffect, useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import "./style.css";

import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Toast notifications
  const notifySuccess = () => toast.success("Login successful!");
  const notifyError = (message: string) => toast.error(message);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form reload

    try {
      // Make an API call to the backend
      const response = await fetch("http://localhost:5289/api/Users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);

        // Save the JWT token in localStorage
        localStorage.setItem("token", data.token);
        // Save the role in localStorage
        localStorage.setItem("role", data.user.role);

        // Notify success and navigate to the dashboard
        notifySuccess();
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        notifyError(errorData.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      notifyError("An error occurred. Please try again.");
    }
  };

  // Email validation
  useEffect(() => {
    if (!email) return;

    const emailInput = document.getElementById("EmailInput")!;
    if (!email.includes("@")) {
      emailInput.style.border = "1px solid red";
    } else {
      emailInput.style.border = "1px solid white";
    }
  }, [email]);

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
