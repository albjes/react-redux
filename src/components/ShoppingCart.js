import Cart from "./Cart";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const { products, cart } = state.shopping;

  return (
    <>
      <h3 className="text-2xl text-center mt-4 mb-4">Productos</h3>

      <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))}
        </div>
      </div>
      {cart.length > 0 ? <Cart cart={cart} /> : ""}
    </>
  );
};

export default ShoppingCart;
