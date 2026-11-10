import { Routes, Route } from 'react-router-dom';
import PlaceList from './pages/PlaceList.jsx';
import PlaceDetail from './pages/PlaceDetail.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<PlaceList />} />
          <Route path="/places/:id" element={<PlaceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
