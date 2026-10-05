import ProductCard from "./ProductCard";

export default function ProductList() {
    const products = [
        {
            id: 1,
            name: "아이스아메리카노",
            price: 1500,
            description: "시원한 아이스 아메리카노 한 잔으로 더위를 날려보세요!",
            image: "/IceAmericano.png",

        },

        {
            id: 2,
            name: "초코라떼",
            price: 2500,
            description: "진한 초코의 풍미가 느껴지는 초코라떼입니다.",
            image: "/ChocoLatte.png",

        },

        {
            id: 3,
            name: "딸기라떼",
            price: 3500,
            description: "신선한 딸기를 가득 담은 딸기라떼입니다.",
            image: "/StrawberryLatte.png",

        },

        {
            id: 4,
            name: "포도에이드",
            price: 3000,
            description: "상큼한 포도와 탄산의 조화를 느껴보세요~",
            image: "/GrapeAde.png",

        },

    ];

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
}