
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import UserDetails from "./pages/UserDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="footer">
        © 2026 Simple User Directory App
      </footer>
    </BrowserRouter>
  );
}

export default App;
