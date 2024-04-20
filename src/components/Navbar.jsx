import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../features/cartSlice";

export default function App() {
  // fetching data from redux store
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  // dispatching getCartTotal reducer function
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            ShoppingCart
            <i className="fa-solid fa-cart-shopping ms-2"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-link active text-black">
                Home
              </Link>
              <Link to="/cart" className="nav-link text-black">
                Cart({totalQuantity})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
