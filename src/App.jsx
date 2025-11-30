import "./App.css";
import { Header } from "./components/HomePage/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { MenuPage } from "./pages/MenuPage/MenuPage";
import { Footer } from "./components/HomePage/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
