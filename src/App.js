import Sidebar from "./components/Sidebar";
import Works from "./pages/works";
import { Routes, Route} from "react-router-dom";
import Aboutme from "./pages/aboutme";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
function App() {

  return (
    <div className="flex bg-gray-900">
    <Sidebar/>

      <Routes>
        <Route path="/projects" element={<Works />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      {console.log("deneme")}
      </Routes>
    </div>
  );
}

export default App;
