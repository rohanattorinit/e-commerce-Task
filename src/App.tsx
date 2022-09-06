import "./styles/index.css";

import { Navbar } from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { useState } from "react";
import { Home, Shop } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductList } from "./pages/ProductList";
import { ProductDetails } from "./pages/ProductDetails";
import { Admin } from "./pages/Admin";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
export interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

function App() {
  const [products, setProducts] = useState<product[]>([]);
  const [product, setProduct] = useState<product>();
  const [wishlist, setWishlist] = useState<product[]>([]);
  const [cart, setCart] = useState<product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <BrowserRouter>
        <Navbar wishlist={wishlist} cart={cart} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/products"
            element={
              <ProductList
                products={products}
                loading={loading}
                setProducts={setProducts}
                setWishlist={setWishlist}
                setCart={setCart}
                wishlist={wishlist}
                cart={cart}
              />
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetails
                product={product}
                setWishlist={setWishlist}
                setCart={setCart}
                wishlist={wishlist}
                cart={cart}
              />
            }
          />

          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlist={wishlist}
                setProduct={setProduct}
                setWishlist={setWishlist}
                setCart={setCart}
                cart={cart}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                wishlist={wishlist}
                setProduct={setProduct}
                setWishlist={setWishlist}
                setCart={setCart}
                cart={cart}
              />
            }
          />

          <Route
            path="/admin"
            element={
              <Admin
                products={products}
                loading={loading}
                setProducts={setProducts}
              />
            }
          />
          <Route
            path="*"
            element={
              <Typography variant="h5" py={3} textAlign="center">
                404 NOT FOUND
              </Typography>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
