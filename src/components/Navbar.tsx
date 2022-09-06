import { Link } from "react-router-dom";

import { HiOutlineShoppingCart } from "react-icons/hi";
export const Navbar = (props: any) => {
  return (
    <nav className="container mx-auto">
      <div className="p-8 flex justify-between">
        <h2 className="text-2xl font-semibold">FakeKart</h2>
        <div className="flex justify-end text-xl font-semibold">
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="/products">
            <h3>Products</h3>
          </Link>
          <Link to="/wishlist">
            <h3>Wishlist</h3>
          </Link>
          <Link to="/cart">
            <HiOutlineShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  );
};
