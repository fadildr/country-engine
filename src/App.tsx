import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/searchPage";
import DetailCountry from "./pages/detailCountry";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/:country" element={<DetailCountry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
