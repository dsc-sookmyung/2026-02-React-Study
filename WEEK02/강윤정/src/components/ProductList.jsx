import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "가면산장 살인사건",
    author: "히가시노 게이고",
    price: 15120,
    description:
      "완벽한 밀실에서 벌어지는 의문의 사건. 예상하기 어려운 반전이 돋보이는 미스터리 소설.",
    image:
      "https://i.namu.wiki/i/sDIuq1yY3jjhbFxlRocU3-zNxq0qId6Tw-nIA2VD8DjCr9LY84nl3g3MxaDvtE5ertjtQ7x17v-nh4gM7pLEAwcYzvsgkGBNUqZQQQTtBKbTmiR8lNVoe9oBCa9SS9EZHmcsGkHM7FxKdGfoOoBMTg.webp",
    category: "미스터리",
    isAutumnPick: true,
  },
  {
    id: 2,
    name: "성",
    author: "프란츠 카프카",
    price: 17100,
    description:
      "닿을 수 없는 성을 향해 나아가는 한 남자의 이야기. 부조리한 세계와 인간의 모습을 담은 카프카의 미완의 걸작.",
    image:
      "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788936464424.jpg?t=2985388",
    category: "고전소설",
    isAutumnPick: false,
  },
  {
    id: 3,
    name: "냉정과 열정사이",
    author: "츠지 히토나리",
    price: 16800,
    description:
      "피렌체를 배경으로 오래된 사랑과 기억을 되짚는 이야기. 쌀쌀한 계절에 잘 어울리는 잔잔한 로맨스 소설.",
    image:
      "https://image.aladin.co.kr/product/33557/38/cover500/e432532647_1.jpg",
    category: "로맨스",
    isAutumnPick: false,
  },
  {
    id: 4,
    name: "새의 선물",
    author: "은희경",
    price: 14400,
    description:
      "열두 살 진희의 시선으로 어른들의 세계를 바라보는 이야기. 냉소적인 시선과 유쾌한 문장이 인상적인 소설.",
    image:
      "https://cdnnews.sookmyung.ac.kr/news/photo/202509/12762_12256_1215.jpg",
    category: "한국소설",
    isAutumnPick: false,
  },
  {
    id: 5,
    name: "나는 오래된 거리처럼 너를 사랑하고",
    author: "진은영",
    price: 11700,
    description:
      "사랑과 일상의 순간을 맑고 섬세한 언어로 담아낸 시집. 가을과 함께 천천히 한 편씩 읽기 좋은 책.",
    image:
      "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788932040448.jpg?t=2985354",
    category: "시",
    isAutumnPick: true,
  },
  {
    id: 6,
    name: "도덕경",
    author: "노자",
    price: 10800,
    description:
      "비움과 자연스러움에 대해 이야기하는 노자의 사상서. 복잡한 일상에서 삶의 태도를 다시 생각하게 하는 책.",
    image:
      "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788931022711.jpg",
    category: "철학",
    isAutumnPick: false,
  },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          author={product.author}
          price={product.price}
          description={product.description}
          image={product.image}
          category={product.category}
          isAutumnPick={product.isAutumnPick}
        />
      ))}
    </div>
  );
}

export default ProductList;