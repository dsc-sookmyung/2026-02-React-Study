import './App.css';
import ProductCard from './components/ProductCard';

import product1 from './assets/product1.jpg';
import product2 from './assets/product2.jpg';
import product3 from './assets/product3.jpg';
import product4 from './assets/product4.jpg';

function App() {
  const products = [
    {
      id: 1,
      name: 'Twist Off-Shoulder Top',
      price: '40,600원',
      description: '한쪽 어깨가 드러나는 오프숄더 티셔츠입니다.',
      image: product1,
      category: 'TOP',
      isSoldOut: false,
    },
    {
      id: 2,
      name: 'Vintage Lettering T-shirts',
      price: '58,000원',
      description: '빈티지 레터링이 들어간 긴팔 티셔츠입니다.',
      image: product2,
      category: 'TOP',
      isSoldOut: false,
    },
    {
      id: 3,
      name: 'Belt Detail Mini Skirt',
      price: '118,000원',
      description: '벨트 디테일이 있는 미니 스커트입니다.',
      image: product3,
      category: 'SKIRT',
      isSoldOut: false,
    },
    {
      id: 4,
      name: 'Love Bites Graphic Sweatshirt',
      price: '70,400원',
      description: '그래픽 프린트가 들어간 오버핏 맨투맨입니다.',
      image: product4,
      category: 'SWEATSHIRT',
      isSoldOut: true,
    },
  ];

  return (
    <main>
      <h1>RAIVE 상품 목록</h1>
      <p className="subtitle">좋아하는 RAIVE 상품을 모아보았습니다.</p>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            category={product.category}
            isSoldOut={product.isSoldOut}
          />
        ))}
      </div>
    </main>
  );
}

export default App;