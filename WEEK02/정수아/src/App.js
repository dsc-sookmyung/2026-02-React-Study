import ProductList from "./ProductList";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1 className="menu-title">
        MENU
      </h1>

      <div className="menu-container">
        <ProductList />
      </div>
    </div>
  );
}