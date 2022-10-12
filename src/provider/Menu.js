import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  const location = useLocation();
  const [menuOpen, toggleMenu] = useState(false);

  useEffect(() => toggleMenu(false), [location]);

  return (
    <MenuContext.Provider value={{ location, menuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
