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
    <article className="product-card">
      <div className="image-box">
        <img className="product-image" src={image} alt={name} />
        {isSoldOut && <span className="sold-out-badge">SOLD OUT</span>}
      </div>

      <div className="product-content">
        <p className="category">{category}</p>
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <p className="product-size">{size}</p>

        <div className="price-area">
          <strong>{price.toLocaleString()}원</strong>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
