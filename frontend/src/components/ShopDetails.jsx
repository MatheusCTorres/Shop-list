import { useShopsContext } from "../hooks/useShopsContext";

export default function ShopDetails({ shop }) {
  const { dispatch } = useShopsContext();

  const handleClick = async () => {
    const response = await fetch(
      "https://app-mern-shop.herokuapp.com/api/shops/" + shop._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_SHOP", payload: json});
    }
  };

  return (
    <div className="shop-details">
      <h4>{shop.title}</h4>
      <p>Amount: {shop.amount}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  );
}
