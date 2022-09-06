import "./styles/index.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MainRouter } from "./router/MainRouter";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState("");

  return (
    <>
      <MainRouter
        products={products}
        setProducts={setProducts}
        loading={loading}
        setLoading={setLoading}
        cart={cart}
        setCart={setCart}
        setWishlist={setWishlist}
        wishlist={wishlist}
      />
    </>
  );
}

export default App;
