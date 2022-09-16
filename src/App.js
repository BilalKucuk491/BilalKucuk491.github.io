import Sidebar from "./components/Sidebar";

import {
  useLocation,
  useNavigate,
  useRoutes
} from "react-router-dom";

import { useEffect } from "react";
import routes from "./routes";

function App() {

  const { pathname: PathName } = useLocation();
  const navigate = useNavigate();
  const condition = PathName === "/" || PathName === "/my-portfolio/";

  useEffect(() => {
    if (condition) {
      navigate("/aboutme");
    }
  }, condition);

  return (
    <div className="flex bg-gray-900">
      <Sidebar />
      {useRoutes(routes)}
    </div>
  );
}

export default App;
