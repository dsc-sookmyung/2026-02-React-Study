
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import PlaceList from "./pages/PlaceList";
import PlaceDetail from "./pages/PlaceDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 첫 화면은 여행지 목록으로 이동 */}
        <Route
          path="/"
          element={<Navigate to="/places" />}
        />

        {/* 여행지 목록 페이지 */}
        <Route
          path="/places"
          element={<PlaceList />}
        />

        {/* 여행지 상세 페이지 */}
        <Route
          path="/places/:id"
          element={<PlaceDetail />}
        />

        {/* 등록되지 않은 모든 주소 */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
