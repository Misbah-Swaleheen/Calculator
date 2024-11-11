import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Display = ({ children }: Props) => {
  return (
    <>
      <div className="display">{children}</div>
    </>
  );
};

export default Display;
