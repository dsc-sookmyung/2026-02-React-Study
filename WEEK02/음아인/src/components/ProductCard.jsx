function ProductCard({
  name,
  price,
  description,
  image,
  category,
  isSoldOut,
}) {
  return (
    <div className="product-card">
      <div className="image-wrap">
        <img src={image} alt={name} />

        {isSoldOut && <span className="sold-out">품절</span>}
      </div>

      <p className="category">{category}</p>
      <h2>{name}</h2>
      <p className="description">{description}</p>
      <p className="price">{price}</p>
    </div>
  );
}

export default ProductCard;