import { useState } from "react";
import "./login.css";
 import { useNavigate } from "react-router-dom";

 const Login = () => { 

  const [userData, setUserData] =useState({
    emailAddress: "",
    password: ""
  });
    
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

  const handleSubmit = () => {
      navigate("/register");
    console.log(email);
  };

  return (
  
    <div className="auth-form-containers">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlfor="email"> emailAdd:</label>
        <input
          value={email}
          // onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="jennyfat@gmail.com"
          id="email"
          name="email"
        />
        
        
      
        <div className="keypass">
          <label htmlFor="password"> password:</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="**************"
            id="password"
            name="password"
          />
        </div>

        <div className="sub">
          <button type="submit">submit</button>
        </div>
      </form>
      <button onClick={handleSubmit}>
        Don't have an account? register here.
      </button>
    </div>
  );
};

export default Login;
