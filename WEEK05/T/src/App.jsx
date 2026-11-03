import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import PlaceList from './pages/PlaceList.jsx';
import PlaceDetail from './pages/PlaceDetail.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        {/* URL에 따라 다른 컴포넌트를 렌더링 */}
        <Routes>
          <Route path="/" element={<PlaceList />} />
          <Route path="/places/:id" element={<PlaceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <span>TRIP NOTE · GDGoC React Study WEEK 05</span>
        <span>관광 정보 출처: 한국관광공사 TourAPI</span>
      </footer>
    </div>
  );
}
