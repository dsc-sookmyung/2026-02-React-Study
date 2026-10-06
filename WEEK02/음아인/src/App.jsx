import './App.css';

function App() {
  const products = [
    {
      id: 1,
      name: 'Twist Off-Shoulder Top',
      price: '40,600원',
      description: '한쪽 어깨가 드러나는 오프숄더 티셔츠입니다.',
      image: '',
    },
    {
      id: 2,
      name: 'Vintage Lettering T-shirts',
      price: '58,000원',
      description: '빈티지 레터링이 들어간 긴팔 티셔츠입니다.',
      image: '',
    },
    {
      id: 3,
      name: 'Belt Detail Mini Skirt',
      price: '118,000원',
      description: '벨트 디테일이 있는 미니 스커트입니다.',
      image: '',
    },
    {
      id: 4,
      name: 'Love Bites Graphic Sweatshirt',
      price: '70,400원',
      description: '그래픽 프린트가 들어간 오버핏 맨투맨입니다.',
      image: '',
    },
  ];

  return (
    <main>
      <h1>RAIVE 상품 목록</h1>
      <p>좋아하는 RAIVE 상품을 모아보았습니다.</p>
    </main>
  );
}

export default App;