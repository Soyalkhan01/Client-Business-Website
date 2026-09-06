import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { LoaderProvider } from "./context/LoaderProvider";
import { WishlistProvider } from "./context/WishlistContext";

import { Toaster } from "react-hot-toast";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LoaderProvider>
<WishlistProvider>
  <ErrorBoundary>
    <App />
    <Toaster
  position="top-right"
  reverseOrder={false}
  toastOptions={{
    duration: 3000,
    style: {
      borderRadius: "16px",
      background: "#fff",
      color: "#111827",
      fontWeight: "600",
      padding: "16px",
    },
    success: {
      iconTheme: {
        primary: "#db2777",
        secondary: "#fff",
      },
    },
    error: {
      iconTheme: {
        primary: "#ef4444",
        secondary: "#fff",
      },
    },
  }}
/>
  </ErrorBoundary>
</WishlistProvider>
      </LoaderProvider>
    </BrowserRouter>
  </StrictMode>
)
