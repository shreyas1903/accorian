import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <p>{title}</p>
      <section>
        <button onclick={() => setShow(!show)}>
          if (show) {<AiOutlineMinus />}else{<AiOutlinePlus />}
        </button>
      </section>
      {show && <p>{info}</p>}
    </div>
  );
};

export default Question;
