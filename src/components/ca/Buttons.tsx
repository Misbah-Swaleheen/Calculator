// import { ReactNode } from "react";

interface Props {
  oonClick: () => void;
}

const Buttons = ({ onClick }: Props) => {
  // const display = (val`ue) => {
  //   // console.log(value);
  //   let e = document.getElementById("screen").innerText;
  //   let result = e + value;
  //   console.log(result);
  //   document.getElementById("screen").innerText = result;
  // };

  // const result = () => {
  //   let e = document.getElementById("screen").innerText;
  //   let result = e + "=" + eval(e);

  //   document.getElementById("screen").innerText = result;
  // };

  // const onClick = (val) => {
  //   console.log(val.value);
  // };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const buttons = numbers.map((number) => {
    return (
      <button
        className="btn btn-outline-secondary"
        onClick={() => onClick(number)}
      >
        {number}
      </button>
    );
  });
  buttons.splice(
    3,
    0,
    <button className="btn btn-outline-secondary" onClick={() => onClick("+")}>
      +
    </button>
  );
  buttons.splice(
    7,
    0,
    <button className="btn btn-outline-secondary" onClick={() => onClick("-")}>
      -
    </button>
  );
  buttons.splice(
    11,
    0,
    <>
      <button
        className="btn btn-outline-secondary"
        onClick={() => onClick("*")}
      >
        *
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => onClick(".")}
      >
        .
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => onClick("0")}
      >
        0
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => onClick("=")}
      >
        =
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => onClick("/")}
      >
        /
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => onClick("C")}
      >
        C
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => onClick("AC")}
      >
        AC
      </button>
    </>
  );

  return (
    <>
      <div className="m-3">{buttons}</div>
    </>
  );
};

export default Buttons;
