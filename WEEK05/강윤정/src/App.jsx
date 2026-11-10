
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import PlaceList from "./pages/PlaceList";
import PlaceDetail from "./pages/PlaceDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<PlaceList />} />

        <Route
          path="/places/:id"
          element={<PlaceDetail />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
