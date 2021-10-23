import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './sentence.css'

const Sentence = () => {

    const [frase, setFrase] = useState('');
    const quote = useSelector(state => state.sentenceString.quote)

    return (
        <>
           <h1>{quote}</h1>
           <div className="div_center">
               <input type="text" name="text" onChange={e => setFrase(e.target.value)}/>
               <button>Change String</button>
           </div>
        </>
    );
}

export default Sentence;
