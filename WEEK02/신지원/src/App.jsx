import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <main className="app">
      <header className="header">
        <p className="eyebrow">REACT STUDY · WEEK 02</p>
        <h1>상품 목록</h1>
        <p className="subtitle">
          치이카와 캐릭터 상품을 판매합니다~~!!
        </p>
      </header>

      <ProductList />
    </main>
  );
}

export default App;