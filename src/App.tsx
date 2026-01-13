import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header } from "./components/HomePage/Header/Header.js";
import HomePage from "./pages/HomePage/HomePage.js";
import { MenuPage } from "./pages/MenuPage/MenuPage.js";
import { Footer } from "./components/HomePage/Footer/Footer.js";
import { LoginPage } from "./pages/LoginPage/LoginPage.js";
import { OrderPage } from "./pages/OrderPage/OrderPage.js";
import { RootState } from "./store/store.js";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
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
