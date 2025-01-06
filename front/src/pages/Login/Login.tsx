import LoginForm from "../../components/Auth/LoginForm";
import "./Login.css"
function Login() {
  return (
    <div className="Login animate__fadeIn">
      <h1 className="LoginTitle">Login</h1>
      <LoginForm />
    </div>
  );
}

export default Login;