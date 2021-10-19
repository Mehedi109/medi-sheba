import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';

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
            <Route path="/about">
              <Home></Home>
            </Route>
            <Route path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
      {/* slider 1 : [url=https://ibb.co/hmxJwbk][img]https://i.ibb.co/vjC6Rpb/photo-1532938911079-1b06ac7ceec7-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg[/img][/url]

      slider 2: [url=https://ibb.co/0ZRVwSy][img]https://i.ibb.co/FJLqPM4/photo-1504813184591-01572f98c85f-ixlib-rb-1-2.jpg[/img][/url]

      slider 3 : [url=https://ibb.co/PwRgjdn][img]https://i.ibb.co/qkzpjvf/photo-1514416205405-075ab2f15964-ixlib-rb-1-2.jpg[/img][/url]

      slider 4 : [url=https://ibb.co/HNXXCN4][img]https://i.ibb.co/GsFF9sp/photo-1578496781985-452d4a934d50-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg[/img][/url]

      slider 5 : [url=https://ibb.co/rwLmR2h][img]https://i.ibb.co/vjrH64W/photo-1612277795421-9bc7706a4a34-ixlib-rb-1-2.jpg[/img][/url]
      </header> */}
    </div>
  );
}

export default App;
