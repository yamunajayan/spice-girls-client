import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "../src/components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MentalHealth from "./pages/MentalHealth/MentalHealth.jsx";
import Community from "./pages/Community/Community.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <svg tabindex="-1" focusable="false" data-di-rand="1729193652193">
                <use
                    tabindex="-1"
                    focusable="false"
                    xlink:href="#icon-bell-logo"
                ></use>
            </svg> */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/mentalhealth" element={<MentalHealth />} />

        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
