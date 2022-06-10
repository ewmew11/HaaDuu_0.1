import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  EarthPage,
  About,
  Contact,
  Blog,
  Posts,
  Post,
  MapPage,
  CityPage
} from "./components";

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/earth" element={<EarthPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/city" element={<CityPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
  </Router>,

  document.getElementById("root")
);

