import LoginForm from "../components/Auth/LoginForm";
import "./Login.css"
function Login() {
  return (
    <div className="Login">
      <h1 className="LoginTitle">Please sign in</h1>
      <LoginForm />
    </div>
  );
}

export default Login;