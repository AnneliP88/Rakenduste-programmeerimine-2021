import { useContext } from 'react'
import { Context } from "../store";
import Login from "../pages/Login";
import { Link } from 'react-router-dom'

function Home() {
  const [state, dispatch] = useContext(Context);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posting Posts...</h1>
      { !state.auth.token && 
        <>
          <Login />
          <Link to="/signup">or Create new account</Link>
        </>
      }
    </div>
  );
}

export default Home;