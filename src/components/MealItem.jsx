import React from "react";
import { currencyFormatter } from "../utils/formatting";

const MealItem = ({ meal }) => {
  const { image, name, price, description } = meal;
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-decription">{description}</p>
        </div>
        <p className="meal-item-actions">
          <button>Add to cart</button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
