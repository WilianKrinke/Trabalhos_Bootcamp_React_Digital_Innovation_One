/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/counterSlice/counterSlice'
import './counter.css';


const Counter = () => {  
    
    const numero = useSelector((state) => state.counter.value)
    const sentence = useSelector((state) => state.sentence.value)
    const dispatch = useDispatch()
    
    return (
        <>
            <section className="container_counter">
                <button onClick={() => dispatch(decrement())}> - </button>

                <div>
                    <h2>{numero}</h2>
                    <h1>{sentence}</h1>
                </div>

                <button onClick={() => dispatch(increment())}> + </button>
            </section>
        </>
    );
}

export default Counter;
