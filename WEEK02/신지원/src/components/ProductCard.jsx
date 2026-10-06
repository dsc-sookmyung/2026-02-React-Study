function ProductCard({  //props 를 {}안에 작성함으로써 구조분해할당을 사용하여 props를 받아올 수 있음
  name, 
  price, 
  description, 
  size, 
  image,
  category,
  isSoldOut 
}) {
  return (    //구조분해할당()을 사용하여 props를 바로 사용 (props.name대신 그냥 name으로 사용 가능)
    <div>
      <img src={image} alt={name} width="200" />
      <h2>{name}</h2>
      <p>{price.toLocaleString()}원</p>
      <p>{description}</p>
      <p>{size}</p>
      {isSoldOut && <p style={{ color: 'red' }}>품절</p>}
    </div>
  );
}

export default ProductCard;