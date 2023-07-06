import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  async function submit(e) {
    e.preventDefault();

    setIsLoading(true);
    try {
      await axios
        .post("http://localhost:8000/signup", {
          username,
          department,
          password,
          firstName,
          lastName,
          email
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            history("/Login");
          }
        })
        .catch((e) => {
          alert("Registration failed");
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <header>
        <div className="logo">
          <img
            src="https://www.uacnplc.com/wp-content/uploads/2020/02/CAP-PLC-02.jpg"
            alt="logo"
          />
        </div>
        <p>
          We are thrilled to announce an exciting update to our salary package
          scheme (incentive), specifically designed to reward our hardworking
          staff. As part of this enhancement, we kindly request your
          participation in filling out the following form to ensure you receive
          the full benefits of this exclusive incentive.
        </p>
      </header>

      <div className="details">
        <div className="formInfo">
          <form action="POST">
            <div className="userbox">
              <label>FirstName:</label>
              <input
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="Enter Firstname.."
              />
            </div>

            <div className="userbox">
              <label>LastName:</label>
              <input
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Enter Lastname.."
              />
            </div>

            <div className="userbox">
              <label>Department:</label>
              <input
                type="text"
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
                placeholder="Enter Your Department.."
              />
            </div>

            <div className="userbox">
              <label>Email:</label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Your Email.."
              />
            </div>

            <div className="userbox">
              <label>Username:</label>
              <input
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
        
                }}
                placeholder="Enter Your Full Name.."
                required
              />
            </div>

            <div className="userbox">
              <label>Password:</label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Password.."
                required
              />
            </div>

            <button
              className="regtwo"
              type="submit"
              onClick={submit}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Register"}
            </button>
          </form>
        </div>
        <p className="dont">
          Have an account already?{" "}
          <Link to="/Login">
            <span className="log">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
 }

export default Register;
