import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Details from "./components/Details";
import React, { createContext, useState } from "react";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login/Login";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Provider store={store}>
              <Nav />
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/cart">
                <Cart></Cart>
              </Route>
              <PrivateRoute path="/details/:id">
                <Details></Details>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
            </Provider>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
