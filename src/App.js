import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRouter/PrivateRouter';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
