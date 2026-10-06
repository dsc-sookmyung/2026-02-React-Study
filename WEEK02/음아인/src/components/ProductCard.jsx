function ProductCard({
  name,
  price,
  description,
  image,
  category,
  isSoldOut,
}) {
  return (
    <article className={`product-card ${isSoldOut ? "sold-out-card" : ""}`}>
      <div className="product-image-wrapper">
        <img className="product-image" src={image} alt={name} />

        {isSoldOut && <span className="sold-out-badge">품절</span>}
      </div>

      <div className="product-info">
        <span className="product-category">{category}</span>

        <h2 className="product-name">{name}</h2>

        <p className="product-description">{description}</p>

        <p className="product-price">
          {price.toLocaleString()}원
        </p>
      </div>
    </article>
  );
}

export default ProductCard;