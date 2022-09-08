import { useShopsContext } from "../hooks/useShopsContext";

export default function ShopDetails({ shop }) {
  const { dispatch } = useShopsContext();

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:4000/api/shops/" + shop._id,
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
