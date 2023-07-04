import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


function Login() {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("https://mern-stack-app-api-kk7j.onrender.com/login", {
          username,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/successPage");
          } else if (res.data === "notexist") {
            alert("does not exist")
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container direct">
      <header>
        <div className="logo">
          <img
            src="https://www.uacnplc.com/wp-content/uploads/2020/02/CAP-PLC-02.jpg"
            alt="logo"
          
          />
        </div>
        <p className="move">Welcome back!</p>
      </header>

      <div className="detailslog">
        <form action="POST">
          <div className="userbox">
            <label htmlFor=""></label>
            <input
              type="texr"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Enter your username"
            />
          </div>

          <div className="passbox">
            <label htmlFor=""></label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
            />
          </div>

          <button className="sign" type="submit" onClick={submit}>
            logIn
          </button>
        </form>
        <p className="dont">
          Don't have an account? <Link to="/"><span className="log">Sign Up</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
