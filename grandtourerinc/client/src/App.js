import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./Page/Landing";
import Footer from "./components/Footer";
import Vehicles from "./Page/Vehicles";
import Guidelines from "./Page/Guidelines";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="vehicles" element={<Vehicles />}></Route>
        <Route path="guidelines" element={<Guidelines />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
