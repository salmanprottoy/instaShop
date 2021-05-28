import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/details/:id" exact component={Details} />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
