
export default function ProductCard({ name, price, description, image }) {
  return (
    <div className="w-64 p-5 m-3 border rounded-xl shadow-md">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="mt-3 text-xl font-bold">{name}</h2>
      <p className="text-lg font-semibold">{price.toLocaleString()}원</p>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
