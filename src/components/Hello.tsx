import React from "react";

type Props = {
  name?: string;
};

const Hello = ({ name }: Props) => {
  return (
    <div>
      <h1 className="text-red-500">Hello</h1>
    </div>
  );
};

export default Hello;
