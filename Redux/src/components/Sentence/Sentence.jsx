import React, { useState } from 'react';
import './sentence.css'

const Sentence = () => {

    const [frase, setFrase] = useState('');

    return (
        <>
           <h1>Frase</h1>
           <div className="div_center">
               <input type="text" name="text" onChange={e => setFrase(e.target.value)}/>
               <button>Change String</button>
           </div>
        </>
    );
}

export default Sentence;
