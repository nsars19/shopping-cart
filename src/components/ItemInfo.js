import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import itemsList from "./itemsList";

function getItemByID(id) {
  const list = itemsList.items;

  for (let i = 0; i < list.length; i++) {
    if (id === list[i].id) {
      return list[i];
    } else {
      continue;
    }
  }
}

const ItemInfo = (props) => {
  let match = useRouteMatch();
  let item = getItemByID(match.params.id);

  if (item) {
    return (
      <>
        <h1>
          {item.name} - ${item.price}
        </h1>
        <button>Add to Cart</button>
      </>
    );
  } else {
    return (
      <h1>Item not found</h1>
    )
  }
};

export default ItemInfo;
