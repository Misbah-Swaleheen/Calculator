import "./App.css";
import Calculator from "./components/ca/Calculator";
import Display from "./components/ca/Display";
import Buttons from "./components/ca/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/index";

function App() {
  const screen = useSelector((state) => state.screen);
  const dispatch = useDispatch();

  const display = (e) => {
    dispatch(actions.display({ value: e }));
  };

  const result = (e) => {
    dispatch(actions.result({ value: e }));
  };

  const clr = () => {
    dispatch(actions.clr());
  };

  const allclr = () => {
    dispatch(actions.allclr());
  };

  return (
    <>
      <div className="container-fluid">
        <Calculator heading="Calculator">
          <Display>
            <div className="inside" id="screen">
              {screen}
            </div>
          </Display>
          <Buttons
            onClick={(e: String) =>
              e == "="
                ? result(e)
                : e == "C"
                ? clr()
                : e == "AC"
                ? allclr()
                : display(e)
            }
          ></Buttons>
        </Calculator>
      </div>
    </>
  );
}

export default App;
