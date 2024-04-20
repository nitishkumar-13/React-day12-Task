import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function ProductCard() {
  // fetching data from redux store
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div
            key={item.id}
            className="card my-3 mx-2 p-0"
            style={{ width: "18rem" }}
          >
            <img src={item.img} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">${item.price}</p>
              <p className="text-muted">{item.description}</p>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(addToCart(item))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
