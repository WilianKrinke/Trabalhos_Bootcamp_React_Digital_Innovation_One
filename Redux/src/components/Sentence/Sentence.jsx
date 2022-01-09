import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuote } from "../../store/actions/actions";
import "./sentence.css";

const Sentence = () => {
  const [frase, setFrase] = useState("");

  const quote = useSelector((state) => state.sentenceString.quote);
  const dispatch = useDispatch();

  function handleQuote(e) {
    e.preventDefault();
    dispatch(changeQuote(frase));
  }

  return (
    <>
      <h1>{quote}</h1>
      <div className="div_center">
        <input
          type="text"
          name="text"
          onChange={(e) => setFrase(e.target.value)}
        />
        <button onClick={(e) => handleQuote(e)}>Change String</button>
      </div>
    </>
  );
};

export default Sentence;
