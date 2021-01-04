function reducer(state, action) {
  if (action.type === "CLEARALL") {
    return { ...state, cart: [] };
  }

  if (action.type === "INCREASE") {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }

      return item;
    });
    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === "REDUCE") {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0);

    return { ...state, cart: newCart };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "SUM") {
    const totalPrice = state.cart
      .map((item) => item.price * item.amount)
      .reduce((acc, cnv) => {
        return acc + cnv;
      }, 0);

    console.log(totalPrice);

    const totalAmount = state.cart
      .map((item) => {
        return item.amount;
      })
      .reduce((acc, cnv) => {
        return acc + cnv;
      }, 0);

    return { ...state, total: totalPrice, amount: totalAmount };
  }

  return state;
}

export default reducer;
