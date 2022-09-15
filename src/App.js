import Sidebar from "./components/Sidebar";
import Works from "./pages/works";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Aboutme from "./pages/aboutme";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import { useEffect } from "react";
import Blog404 from "./pages/Blog404";

function App() {
  const isMainPath = useLocation().pathname;
  const navigate = useNavigate();
  const condition = isMainPath === "/" || isMainPath==="/my-portfolio/";
  useEffect(() => {
    if (condition) {
      navigate("/aboutme");
    }
    console.log(isMainPath);
  }, condition);

  return (
    <div className="flex bg-gray-900">
      <Sidebar />
      <Routes>
        <Route path="/projects" element={<Works />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/*" element={<Blog404 />} />
      </Routes>
    </div>
  );
}

export default App;
