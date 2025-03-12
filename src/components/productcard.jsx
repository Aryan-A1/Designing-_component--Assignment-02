import "../components/productcard.css";
import Button from "./button";

export default function ProductCard() {
  const products = [
    {
      product_image: "https://pbs.twimg.com/media/GgqTCL4XkAAuW7N.jpg",
      product_name: "NVIDIA GeForce RTX 5090",
      price: "3000$",
    },
    {
      product_image: "https://i.ytimg.com/vi/fj245xMr-BM/sddefault.jpg",
      product_name: "NVIDIA GeForce RTX 4090",
      price: "2500$",
    },
  ];

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.product_image} alt="Product-image" className="product-img" />
          <h3>{product.product_name}</h3>
          <h2>
            <b>Price: </b>
            {product.price}
          </h2>
          <Button />
        </div>
      ))}
    </div>
  );
}
