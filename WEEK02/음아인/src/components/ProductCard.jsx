function ProductCard({ name, price, description, image }) {
  return (
    <div>
      <img src={image} alt={name} />

      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;