import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
