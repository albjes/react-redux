import Contador from "./components/Contador";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NewExercise from "./components/NewExercise";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <Header />
        <NewExercise msg="REACT REDUX" flexType="flex-col">
          <Contador />
        </NewExercise>
      </div>
    </Provider>
  );
}

export default App;
