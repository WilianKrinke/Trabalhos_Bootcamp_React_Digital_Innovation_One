import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { changeString } from '../../store/changeSentence/changeSentence';
import './sentence.css'

const Sentence = () => {

    const [frase, setFrase] = useState('');

    const sentence = useSelector((state) => state.sentence.value)
    const dispatch = useDispatch()

    function handleChange(e) {
        e.preventDefault();
        dispatch(changeString(frase))
    }

    return (
        <>
           <h1>{sentence}</h1>
           <div className="div_center">
               <input type="text" name="text" onChange={e => setFrase(e.target.value)}/>
               <button onClick={e => handleChange(e)}>Change String</button>
           </div>
        </>
    );
}

export default Sentence;
