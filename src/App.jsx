import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "../src/components/Header/Header.jsx";
import BetterWorld from "./pages/BetterWorld.jsx";

function App() {
    return (
        <BrowserRouter>
        
            <svg tabindex="-1" focusable="false" data-di-rand="1729193652193">
                <use
                    tabindex="-1"
                    focusable="false"
                    xlink:href="#icon-bell-logo"
                ></use>
            </svg>
            <Header />
            <Routes>
                {/* <Route 
                    path="/"
                    element={<HomePage />} 
                /> */}

                <Route 
                    path="/betterworld"
                    element={<BetterWorld />} 
                />            

            </Routes>
        </BrowserRouter>
    );
}

export default App;
