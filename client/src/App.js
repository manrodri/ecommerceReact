import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";
import SignOut from "./pages/auth/AmplifySignout";


const App = () => {
  return (
    <>
      <Header />
      <ToastContainer/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignOut} />
        <Route exact path="/register" component={Register} />
        <Route exac path={'/register/complete'} component={RegisterComplete}/>
      </Switch>
    </>
  );
};

export default App;
