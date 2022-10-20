import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookPage from "./pages/BookPage";
import Botiga from "./pages/Botiga";
import Collection from "./pages/Collection";
import Contacte from "./pages/Contacte";
import Editorial from "./pages/Editorial";
import Index from "./pages/Index";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/botiga" element={<Botiga />} />
        <Route path="/contacte" element={<Contacte />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/llibres/:productId" element={<BookPage />} />
        <Route path="/colleccio/:collection" element={<Collection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
