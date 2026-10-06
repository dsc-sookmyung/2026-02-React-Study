function ProductCard({
  name,
  author,
  price,
  description,
  image,
  category,
  isAutumnPick,
}) {
  return (
    <div className="product-card">
      <div className="image-box">
        <img src={image} alt={name} />

        {isAutumnPick && (
          <span className="autumn-pick">AUTUMN PICK</span>
        )}
      </div>

      <div className="product-info">
        <p className="category">{category}</p>

        <h2>{name}</h2>

        <p className="author">{author}</p>

        <p className="description">{description}</p>

        <p className="price">{price.toLocaleString()}원</p>
      </div>
    </div>
  );
}

export default ProductCard;