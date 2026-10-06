import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="page-header">
        <h1>가을에는 책책책! 책을 읽읍시다.</h1>

        <p className="page-description">
          하늘은 높고 마음은 여유로워지는 계절에 읽기 좋은 책들을 골라보았어요🍂
        </p>
      </header>

      <ProductList />
    </div>
  );
}

export default App;