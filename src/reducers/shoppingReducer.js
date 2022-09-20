import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const InitialState = {
  products: [
    {
      id: 1,
      name: "Producto 1",
      price: 100,
      img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 200,
      img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    },
    {
      id: 3,
      name: "Producto 3",
      price: 300,
      img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    },
    {
      id: 4,
      name: "Producto 4",
      price: 400,
      img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    },
    {
      id: 5,
      name: "Producto 5",
      price: 500,
      img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    },
    {
      id: 6,
      name: "Producto 6",
      price: 600,
      img: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    },
  ],
  cart: [],
};

export default function shoppingReducer(state = InitialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART:
      return InitialState;
    default:
      return state;
  }
}
