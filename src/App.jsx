import { useRoutes, Navigate } from "react-router-dom";
import AuthLayout from "./pages/layouts/AuthLayout";
import Layout from "./pages/layouts/Layout";
import Unauthorized from "./pages/Unauthorized";
import Projects from "./pages/protected/Projects";

const isAuthenticated = true;

const ProtectedRoute = ({ children }) => (isAuthenticated ? children : <Navigate to="/unauthorized" />);

const routesConfig = [
  {
    element: <AuthLayout />,
    children: [{ path: "/unauthorized", element: <Unauthorized /> }],
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/projects", element: <Projects /> },
      {
        path: "/",
        element: <Navigate to="/projects" replace />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/unauthorized" replace />,
  },
];

function App() {
  const routing = useRoutes(routesConfig);
  return routing;
}

export default App;
