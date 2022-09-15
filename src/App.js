import Sidebar from "./components/Sidebar";
import Works from "./pages/works";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Aboutme from "./pages/aboutme";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import { useEffect } from "react";

function App() {
  const isMainPath = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (isMainPath === "/") {
      navigate("/aboutme");
    }
    console.log(isMainPath);
  }, isMainPath === "/");

  return (
    <div className="flex bg-gray-900">
      <Sidebar />
      <Routes>
        <Route path="/projects" element={<Works />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
