import Contador from "./components/Contador";
import CrudApi from "./components/CrudApi";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NewExercise from "./components/NewExercise";
import { Provider } from "react-redux";
import ShoppingCart from "./components/ShoppingCart";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <Header />
        <NewExercise msg="REACT REDUX CRUD API" flexType="flex-col">
          <CrudApi />
        </NewExercise>
        <NewExercise msg="REACT REDUX CARRITO DE COMPRA" flexType="flex-col">
          <ShoppingCart />
        </NewExercise>
        <NewExercise msg="REACT REDUX" flexType="flex-col">
          <Contador />
        </NewExercise>
      </div>
    </Provider>
  );
}

export default App;
