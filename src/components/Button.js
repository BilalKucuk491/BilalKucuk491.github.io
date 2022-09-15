import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Button({ name, pathName = "/" }) {

  return (
    <NavLink
      to={pathName}
      className={({ isActive }) =>
        isActive
          ? "flex text-white border-gray-600 bg-neon_green h-16 items-center justify-center border transition-colors"
          : "flex text-cream border-gray-600 h-16 items-center justify-center border hover:bg-gray-700 hover:text-neon_green transition-colors"
      }
    >
      {name}
    </NavLink>
  );
}
