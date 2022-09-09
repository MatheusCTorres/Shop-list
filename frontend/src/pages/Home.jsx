import { useEffect } from "react";
import ShopDetails from "../components/ShopDetails";
import ShopForm from "../components/ShopForm";
import { useShopsContext } from "../hooks/useShopsContext";

export default function Home() {
  const { shops, dispatch } = useShopsContext();

  useEffect(() => {
    const fetchShops = async () => {
      const response = await fetch("https://app-mern-shop.herokuapp.com/api/shops");
      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_SHOPS",
          payload: json,
        });
      }
    };

    fetchShops();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="shops">
        <h1>List</h1>
        {shops &&
          shops.map((shop) => {
            return <ShopDetails key={shop._id} shop={shop} />;
          })}
      </div>
      <ShopForm />
    </div>
  );
}
