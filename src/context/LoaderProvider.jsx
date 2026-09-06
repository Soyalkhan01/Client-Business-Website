import { useState } from "react";
import { LoaderContext } from "./LoaderContext";

export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

  return (
    <LoaderContext.Provider
      value={{
        loading,
        startLoading,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}