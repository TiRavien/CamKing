import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explores from './Pages/Purchase/Explores/Explores';
import Navber from './Pages/Shared/Navber/Navber';
import Footer from './Pages/Home/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Navber />
        <Switch>
          <Route path="/explores">
            <Explores />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
