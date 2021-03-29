import "./App.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";

import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/contact";
import About from "./pages/About";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (auth.currentUser) {
      const { displayName, email, uid } = auth.currentUser;
      setUser({ displayName, email, uid });
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/account">
          <Account user={user} setUser={setUser} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/details/:id">
          <ProductDetails />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
