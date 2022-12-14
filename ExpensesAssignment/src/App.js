import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Items from "./components/Items/Items";
import Item from "./components/Item/Item";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/Car/:id" element={<Item />} />
        </Routes>
      </div>
    </Router>
  );
}
