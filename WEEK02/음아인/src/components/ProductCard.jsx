function ProductCard({
  name,
  price,
  description,
  image,
  category,
  isSoldOut,
}) {
  return (
    <div>
      <img src={image} alt={name} />

      <p>{category}</p>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>

      {isSoldOut && <p>품절</p>}
    </div>
  );
}

export default ProductCard;