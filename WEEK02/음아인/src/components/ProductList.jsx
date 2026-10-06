import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "쿠로미 얼굴",
    price: 10000,
    description: "정면을 바라보고 있는 쿠로미입니다.",
    image: "https://i.pinimg.com/736x/a6/8a/86/a68a86c4055d710a1b6d3f1f1239d44c.jpg",
    category: "사진",
    isSoldOut: false,
  },
  {
    id: 2,
    name: "쿠로미 인형",
    price: 55000,
    description: "웃고있는 쿠로미 인형입니다.",
    image: "https://i.pinimg.com/736x/ce/9e/3d/ce9e3d0a0dfad7f3f25fbc05d9c64889.jpg",
    category: "인형",
    isSoldOut: false,
  },
  {
    id: 3,
    name: "쿠로미 파자마",
    price: 79000,
    description: "따뜻하고 부드러운 재질의 원피스 파자마입니다.",
    image: "https://i.pinimg.com/736x/ad/e3/31/ade3314639ea9597993f443b19e13d52.jpg",
    category: "패션",
    isSoldOut: true,
  },
  {
    id: 4,
    name: "헬로키티 사진",
    price: 8900,
    description: "인사하고 있는 헬로키티 사진입니다.",
    image: "https://i.pinimg.com/736x/01/84/23/018423ead3453ccf1652979327dae1bf.jpg",
    category: "사진",
    isSoldOut: false,
  },
  {
    id: 5,
    name: "헬로키티 인형",
    price: 350000,
    description: "흑백이 포인트인 헬로키티 인형입니다.",
    image: "https://i.pinimg.com/736x/e6/fa/d5/e6fad54cc32f934b5c946d290fcec4b3.jpg",
    category: "인형",
    isSoldOut: false,
  },
  {
    id: 6,
    name: "우사하나 인형",
    price: 42000,
    description: "요즘 붐인 우사하나 인형입니다.",
    image: "https://i.pinimg.com/1200x/96/06/24/96062476c1eb7b09ccaa6c8f18a5b2f6.jpg",
    category: "인형",
    isSoldOut: false,
  },
];

function ProductList() {
  return (
    <section className="product-list">
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
    </section>
  );
}

export default ProductList;