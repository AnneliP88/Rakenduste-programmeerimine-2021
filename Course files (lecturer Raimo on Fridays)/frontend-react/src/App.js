import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import { Layout } from "antd";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Layout.Header>
        <Route path="/" component={Header} />
      </Layout.Header>
      <Layout.Content>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Layout.Content>
      <Layout.Footer>
        <Route path="/" component={Footer} />
      </Layout.Footer>
    </Layout>
    </BrowserRouter>
  );
}

export default App;