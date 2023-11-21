import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";
import Black from "./Black";
import Pink from "./Pink";

const MainSection = () => {
    return (
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/black" element={<Black />} />
            <Route path="/pink" element={<Pink />} />
          </Routes>
        </div>
    )
}

export default MainSection