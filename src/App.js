import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer"
import Home from "./Pages/Home/Home/Home"
import About from "./Pages/Home/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import Packages from "./Pages/Packages/Packages";
import Destinations from "./Pages/Destinations/Destinations";
import AddNewPackage from "./Pages/Admin/AddNewPackage/AddNewPackage";
import Login from "./Pages/Login/Login/Login";
import ClientPage from "./Pages/ClientSite/ClientPage";
import PackageDetails from "./PackageDetails/PackageDetails";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import ConfirmBooking from "./Pages/ConfirmBooking/ConfirmBooking";
import ManageUsers from "./Pages/Admin/ManageUsers/ManageUsers";
import Dashboard from "./Pages/Admin/AdminDashBoard/Dashboard";
import YourBooking from "./Pages/YourBooking/YourBooking";
import ClientDashbroad from "./Pages/ClientDashbroad/ClientDashbroad";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/packages">
              <Packages />
            </Route>
            <Route path="/clientLogin">
              <Login></Login>
            </Route>
            <Route path="/clientPage">
              <ClientPage></ClientPage>
            </Route>
            <Route path="/destinations">
              <Destinations />
            </Route>
            <Route path="/addPackages">
              <AddNewPackage />
            </Route>
            <Route path="/manageUsers">
              <ManageUsers />
            </Route>
            <PrivateRoute path="/adminDashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/clientDashboard">
              <ClientDashbroad />
            </PrivateRoute>
            <Route path="/confirmBooking">
              <ConfirmBooking />
            </Route>
            <Route path="/yourBooking">
              <YourBooking />
            </Route>
            <PrivateRoute path="/packageDetails/:id">
              <PackageDetails />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
