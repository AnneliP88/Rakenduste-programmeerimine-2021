import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import { Layout } from "antd";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import './App.css';
const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
    <Layout style={{height: '100vh', backgroundColor: "lightblue", backgroundImage: "linear-gradient(#596886, lightblue)"}}>
      <Layout.Header style={{backgroundColor: "white"}}>
        <Header/>
      </Layout.Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, textAlign: "center" }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Content>
      <Layout.Footer style={{textAlign: "center", backgroundColor: "white"}}>
        <Footer/>
      </Layout.Footer>
    </Layout>
    </BrowserRouter>
  );
}

export default App;