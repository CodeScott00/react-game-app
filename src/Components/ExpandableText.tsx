import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ maxChars = 100, children }: Props) => {
  const [toggle, setToggle] = useState(false);
  const text = toggle ? children : children.substring(0, maxChars);

  if (children.length <= maxChars) return <p>{children}</p>;
  return (
    <p>
      {text}...
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
