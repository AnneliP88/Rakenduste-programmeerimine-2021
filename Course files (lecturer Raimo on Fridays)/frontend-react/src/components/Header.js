import { Menu } from "antd";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Menu mode="horizontal">
        {/* The key props were neccesary because it took away Console error */}
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item  key="2">
          <Link to="/posts">Posts</Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Header