import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <main className="app">
      <header className="header">
        <p className="eyebrow">REACT STUDY · WEEK 02</p>
        <h1>상품 목록</h1>
        <p className="subtitle">
          📢 극장판 : 치이카와 인어섬의 비밀 개봉 기념
          <br />
          한정판 굿즈 판매합니다!
        </p>
      </header>

      <ProductList />
    </main>
  );
}

export default App;