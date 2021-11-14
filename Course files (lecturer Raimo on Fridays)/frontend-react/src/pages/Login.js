import { useState, useContext, useRef } from "react"
import { useHistory } from 'react-router-dom'
import { Button, notification } from 'antd'
import { Context } from "../store";
import { loginUser } from "../store/actions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);
  
  // How to redirect in React: https://www.youtube.com/watch?v=tiAlSpyWIDs
  let history = useHistory();

  const redirectToPostsPage= () => {
    history.push("/posts");
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const userLoginInfo = {
      email,
      password
    };

    setEmail("");
    setPassword("");
    logInOperation(userLoginInfo)
  }
  
  const logInOperation = async (user) => {
    const response = await fetch('http://localhost:8081/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const returnedData = await response.json()

    // BE sends a token and user data - so I'll have to check if token arrived or not :)
    if (returnedData.token) {
      dispatch(loginUser(returnedData));
      notification.success({
        message: `Welcome, ${returnedData.firstName}!`,
      })

      redirectToPostsPage();

    } else {
      // console.log(returnedData.msg)
      notification.error({
        message: 'Something went wrong! Try again!',
        duration: 2,
      })
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          ref={inputRef}
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          required
        />
        <br/><br/>

        <input
          ref={inputRef}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br/><br/>
        <Button 
          htmlType="submit" 
          className="submitBtn">Log In
        </Button>
        <br/><br/><br/>
      </form>
    </>
  )
}

export default Login