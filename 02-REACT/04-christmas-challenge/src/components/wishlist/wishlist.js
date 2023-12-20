import React, { useState } from "react";
import styles from "./wishlist.module.css";

export default function Wishlist() {
  const [wishList, setWishList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setWishList([...wishList, newItem.trim()]);
      setNewItem("");
    }
  };

  return (
    <div className={styles.wishList}>
      <h1 className={styles.header}>Wishlist:</h1>
      <ul className={styles.list}>
        {wishList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className={styles.input}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Add item to wishlist"
          value={newItem}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
    </div>
  );
}
