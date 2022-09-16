import Sidebar from "./components/Sidebar";
import Works from "./pages/works";
import Aboutme from "./pages/aboutme";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Blog404 from "./pages/Blog404";

const routes = (
    [
      {
        path:"/projects",
        element:<Works/>
      },
      {
        path:"/aboutme",
        element:<Aboutme/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/*",
        element:<Blog404/>
      },
    ]
);

export default routes;