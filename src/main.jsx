import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Property";
import Error from "./pages/Error";

import "./styles/main.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="properties/:id" element={<Property />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </Router>
);
