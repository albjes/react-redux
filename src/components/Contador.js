import {
  reset,
  restar,
  restar5,
  sumar,
  sumar5,
} from "../actions/contadorActions";
import { useDispatch, useSelector } from "react-redux";

const Contador = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="mb-11">
      <h2 className="text-3xl text-center">Contador</h2>
      <nav className="mt-4 flex items-baseline space-x-2 justify-evenly">
        <button
          onClick={() => dispatch(restar())}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
        <button
          onClick={() => dispatch(restar5())}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          -5
        </button>
        <button
          onClick={() => dispatch(sumar())}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch(sumar5())}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          +5
        </button>
      </nav>
      <nav className="mt-4 flex items-baseline space-x-2 justify-evenly">
        <span className="font-bold text-3xl ">{state.contador}</span>
      </nav>
      <nav className="mt-4 flex items-baseline space-x-2 justify-evenly">
        <button
          onClick={() => dispatch(reset())}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          RESET
        </button>
      </nav>
    </div>
  );
};

export default Contador;
