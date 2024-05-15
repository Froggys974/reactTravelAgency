import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/route";

function App() {
  return (
    
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
  );
}

export default App;
