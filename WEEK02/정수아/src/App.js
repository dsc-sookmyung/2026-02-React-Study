import ProductList from "./ProductList";

export default function App() {
  return (
    <div className="min-h-screen bg-yellow-50 p-10">
      <h1 className="mb-8 text-3xl font-bold text-center">
        상품 목록
      </h1>

      <ProductList />
    </div>
  );
}