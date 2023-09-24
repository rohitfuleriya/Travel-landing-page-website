import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
// import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";
import Packages from "./components/packages/Packages";

function App() {
  return (
    <div className="App">
      <Router>
        <Route>
          <Navbar />
        </Route>
        <Switch>
          <div className="container">
            <Route exact path="/">
              <Home />
              <Main />
              <Footer />
            </Route>
            <Route exact path="/packages">
              <Packages />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
