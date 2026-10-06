import "./ProductCard.css";

export default function ProductCard({
  name,
  price,
  description,
  image,
  category,
  isSoldOut,
}) {
  return (
    <div className="product-card">

      
      <div className="product-image-container">
        <img
          src={image}
          alt={name}
          className="product-image"
        />
      </div>

      
      <div className="product-info">

       
        <div className="product-title">
          <h2 className="product-name">
            {name}
          </h2>

          <p className="product-price">
            {price.toLocaleString()}원
          </p>
        </div>

        
        <p className="product-category">
          {category}
        </p>

        
        <p className="product-description">
          {description}
        </p>

        
        <div className="product-status">
          {isSoldOut ? (
            <span className="status sold-out">
              Sold Out
            </span>
          ) : (
            <span className="status available">
              Available
            </span>
          )}
        </div>

      </div>
    </div>
  );
}