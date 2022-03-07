export const removeItemsfromCart2 = (existingItems, removeItem) => {
  let allItems = existingItems;
  if (
    existingItems[removeItem.id] !== undefined &&
    existingItems[removeItem.id].quantity > 1
  ) {
    allItems = {
      ...allItems,
      [removeItem.id]: {
        ...removeItem,
        quantity: existingItems[removeItem.id].quantity - 1,
      },
    };
  } else {
    if (allItems[removeItem.id] !== undefined) {
      delete allItems[removeItem.id];
    }
  }

  return allItems;
};

export const addItemstoCart2 = (existingItems, addItem) => {
  let allItems = existingItems;
  if (existingItems[addItem.id] !== undefined) {
    // exist item
    allItems = {
      ...allItems,
      [addItem.id]: {
        ...addItem,
        quantity: existingItems[addItem.id].quantity + 1,
      },
    };
  } else {
    // first time
    allItems = {
      ...allItems,
      [addItem.id]: {
        ...addItem,
        quantity: 1,
      },
    };
  }

  return allItems;
};
