import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "../App";
import { Navbar } from "../components/Navbar";
import { Admin } from "../pages/Admin";
import { Cart } from "../pages/Cart";
import Homepage from "../pages/Homepage";
import { ProductDetails } from "../pages/ProductDetails";
import { ProductList } from "../pages/ProductList";
import { Wishlist } from "../pages/Wishlist";

type RouterProps = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  wishlist: Product[];
  setWishlist: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const MainRouter = (props: RouterProps) => {
  const {
    products,
    setProducts,
    loading,
    setLoading,
    cart,
    setCart,
    wishlist,
    setWishlist,
  } = props;
  return (
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
              setProducts={setProducts}
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
              setProducts={setProducts}
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
        <Route path="*" element={<h1>ROUTE NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
