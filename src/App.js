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
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Pay from './Pages/Dashboard/Pay/Pay';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Revieww from './Pages/Dashboard/Revieww/Revieww';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          
          <Switch>
            <PrivateRoute path="/explores/:serviceId">
              <Purchase />
            </PrivateRoute>
            <Route exact path="/explores">
              <Explores />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/myOrder">
              <MyOrders />
            </Route>
            <Route path="/pay">
              <Pay />
            </Route>
            <Route path="/revieww">
              <Revieww />
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
          
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
