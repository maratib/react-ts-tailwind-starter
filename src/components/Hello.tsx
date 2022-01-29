import React from "react";

type Props = {
  name?: string;
};

const Hello = ({ name }: Props) => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Hello;
