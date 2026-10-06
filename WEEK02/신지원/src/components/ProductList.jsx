import ProductCard from "./ProductCard";

//상품 데이터 products 배열
const products = [
  {
    //배열 객체
    id: 1,
    name: "세이렌 거대 소프비 피규어",
    price: 77200,
    description: "인어섬 주인공인 세이렌과 인어 두마리를 포함하는 상품입니다.",
    size: "H230xW230xD200mm",
    image: "https://chiikawamarket.jp/cdn/shop/files/4571609404385_0.jpg?v=1785473479&width=1100",
    category: "피규어",
    isSoldOut: false,
  },
  {
    id: 2,
    name: "치이카와 미니 소프비 피규어 컬렉션 (전 10종)",
    price: 5600,
    description: "10종 랜덤 발송되는 피규어입니다.",
    size: "H53xW45xD57mm",
    image: "https://chiikawamarket.jp/cdn/shop/files/4571609404408_0.jpg?v=1780831274&width=1100",
    category: "피규어",
    isSoldOut: false,
  },
  {
    id: 3,
    name: "해변에서 댄스 아크릴 스탠드",
    price: 5600,
    description: "8종 랜덤 발송되는 아크릴 스탠드입니다.",
    size: "H63xW56xD29mm",
    image: "https://chiikawamarket.jp/cdn/shop/files/4571609404774_0.jpg?v=1781159929&width=1100",
    category: "스탠드",
    isSoldOut: true,
  },
  {
    id: 4,
    name: "배멀미 해버린 치이카와 마스코트 인형",
    price: 18800,
    description: "치이카와 인어섬 개봉 기념 마스코트 인형입니다.",
    size: "H110xW90xD60mm",
    image: "https://chiikawamarket.jp/cdn/shop/files/4571609404415_1_pre.jpg?v=1787895818&width=1100",
    category: "인형",
    isSoldOut: false,
  },
  {
    id: 5,
    name: "치이카와 인어섬 마스코트 인형",
    price: 18800,
    description: "치이카와 인어섬 개봉 기념 마스코트 인형입니다.",
    size: "H110xW90xD50mm",
    image: "https://chiikawamarket.jp/cdn/shop/files/4571609399247_1_pre.jpg?v=1787896650&width=1100",
    category: "인형",
    isSoldOut: false,
  },
  {
    id: 6,
    name: "하치와레 인어섬 마스코트 인형",
    price: 18800,
    description: "치이카와 인어섬 개봉 기념 마스코트 인형입니다.",
    size: "H110xW90xD50mm",
    image: "https://chiikawamarket.jp/cdn/shop/files/4571609399254_1_pre.jpg?v=1787896603&width=1100",
    category: "인형",
    isSoldOut: false,
  },
];

function ProductList() {
  return (
    <section className="product-list">
      {products.map((product) => (    //map() 메서드를 사용하여 products 배열의 각 요소를 ProductCard 컴포넌트로 변환
        <ProductCard                  //ProductCard 컴포넌트에 props 전달
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          size={product.size}
          image={product.image}
          category={product.category}
          isSoldOut={product.isSoldOut}
        />
      ))}
    </section>
  );
}

export default ProductList;