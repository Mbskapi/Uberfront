import { useState } from "react";
import axios from "axios";
import "./register.css";
// import useNavigate from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  // const [name, setName] = useState("");

  // const navigate = useNavigate;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate("/login");
  //   console.log(email);
  // };
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });
  const handleSubmit2 = (e) => {
    console.log("the handle submit is working")
    e.preventDefault();
    try {
      axios
        .post(
            "http://localhost:8080/api/v1/user/createAccount", userData
          )
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    console.log("handle change is working")
    const { name, value } = e.target;
    setUserData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <div className="auth-form-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit2} className="form">
        <div className="input-div">
          <label htmlFor="name">firstname:</label>
          <input
            value={userData.firstName}
            onChange={handleChange}
            // onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="martin"
            id="firstName"
            name="firstName"
          />
        </div>

        <div  className="input-div">
          <label htmlFor="name">lastName:</label>
          <input
            value={userData.lastName}
            onChange={handleChange}
            // onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="mathew "
            id="lastName"
            name="lastName"
          />
        </div>
        <div className="input-div">
          <label htmlFor="email">emailAd : </label>
          <input
            value={userData.emailAddress}
            onChange={handleChange}
            // onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="sealord@gmail.com"
            id="email"
            name="emailAddress"
          />
        </div>

        <div className="input-div">
          <label htmlFor="password"> password: </label>
          <input
            value={userData.password}
            onChange={handleChange}
            // onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="*****"
            id="password"
            name="password"
          />
        </div>
        <button type="submit">Register</button>
       
      </form>
      
      {/* <button onClick={props.onFormSwitc}>
        Already have an account? Login here.
      </button> */}
    </div>
  );
};
export default Register;
