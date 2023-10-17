import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [datos, setDatos] = useState(null);

  const navigateBack = () => {
    // Realiza cualquier acción que necesites antes de la navegación
    window.history.back();
  };

  return (
    <AppContext.Provider value={{ datos, setDatos, navigateBack }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);