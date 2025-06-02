import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Layout from "./components/Layout.jsx";
import AdminLayout from "./components/Admin/AdminLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import CartPage from "./pages/CartPage.jsx";
import App from "./App.jsx";
import ManageProducts from "./components/Admin/ManageProducts.jsx";
import ManageUsers from "./components/Admin/ManageUsers.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> }, // Home as default route
      { path: "cart", element: <CartPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> }, // <-- This line fixes /admin
      { path: "dashboard", element: <Dashboard /> },
      { path: "products", element: <ManageProducts /> },
      { path: "users", element: <ManageUsers /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  { path: "login", element: <Login /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
);
