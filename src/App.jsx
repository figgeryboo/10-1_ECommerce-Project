import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"
import { useState, useEffect } from "react"
import './App.css'
import NavBar from "../src/components/NavBar"
import SearchBar from "./components/SearchBar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
