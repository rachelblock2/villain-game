import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import styles from './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Board from "./components/Board";
import NotFoundPage from "./components/NotFound";
import Card from "./components/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/board",
    element: <Board />,
    children: [
      {
        path: ":profileId",
        element: <Card />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
