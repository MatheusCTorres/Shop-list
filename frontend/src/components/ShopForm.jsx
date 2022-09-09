import { useState } from "react";
import { useShopsContext } from "../hooks/useShopsContext";

export default function WorkoutForm() {
  const { dispatch } = useShopsContext();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const shop = { title, amount };
    const response = await fetch("https://app-mern-shop.herokuapp.com/api/shops", {
      method: "POST",
      body: JSON.stringify(shop),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle("");
      setAmount("");
      setError(null);
      setEmptyFields([])
      console.log("new shop is added", json);
      dispatch({ type: "CREATE_SHOP", payload: json }); // update form without refresh
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Shop</h3>

      <label>Shop Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Amount:</label>
      <input
        type="text"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        className={emptyFields.includes("amount") ? "error" : ""}

      />

      <button>Add a workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
