import { Menu } from "antd";
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { Context } from "../store";
import { logoutUser } from "../store/actions"
import { LogoutOutlined, HomeOutlined } from '@ant-design/icons'

function Header() {
  const [state, dispatch] = useContext(Context);

  return (
    <>
      <Menu mode="horizontal">
        {/* The key props were neccesary because it took away Console error */}
        <Menu.Item key="1">
          <Link to="/"><HomeOutlined /></Link>
        </Menu.Item>

        { state.auth.token && 
          <>
            <Menu.Item  key="2" style={{ marginRight: "auto" }}>
              <Link to="/posts">Posts</Link>
            </Menu.Item>
            <Menu.Item  key="3">
              <Link to="/" 
                onClick={() => dispatch(logoutUser())}>Log out <LogoutOutlined/>
              </Link>
            </Menu.Item>
          </>
        }
      </Menu>
    </>
  )
}

export default Header