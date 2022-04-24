import { useState } from "react";

export const Todo = ({ get }) => {
  const [input, setInput] = useState();
  return (
    <div className={"div-tag"}>
      <input
        type="text"
        placeholder="Write Something"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          get(input);
        }}
      >
        +
      </button>
    </div>
  );
};
