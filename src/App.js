import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
