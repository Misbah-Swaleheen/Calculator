import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode;
}

const Calculator = ({ heading, children }: Props) => {
  return (
    <>
      <h1>{heading}</h1>
      <div className="calculator p-3 my-2">{children}</div>
    </>
  );
};

export default Calculator;
