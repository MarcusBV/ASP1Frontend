import { useRoutes, Navigate } from "react-router-dom";

const isAuthenticated = true;

const ProtectedRoute = ({ children }) => (isAuthenticated ? children : <Navigate to="/unauthorized" />);

function App() {
  return <></>;
}

export default App;
