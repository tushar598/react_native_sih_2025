// src/context/LoaderContext.tsx
import React, { createContext, useState, useContext } from "react";

interface LoaderContextProps {
  showLoader: () => void;
  hideLoader: () => void;
}

const LoaderContext = createContext<LoaderContextProps>({
  showLoader: () => {},
  hideLoader: () => {},
});

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {children}
      <Loader visible={loading} />
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);

// Import Loader component
import Loader from "../components/Loader";
