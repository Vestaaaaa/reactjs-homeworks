import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header } from "./components/HomePage/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { MenuPage } from "./pages/MenuPage/MenuPage";
import { Footer } from "./components/HomePage/Footer/Footer";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { OrderPage } from "./pages/OrderPage/OrderPage";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const ProtectedRoute = ({ children }) => {
    return isAuth ? children : <Navigate to="/login" replace />;
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
