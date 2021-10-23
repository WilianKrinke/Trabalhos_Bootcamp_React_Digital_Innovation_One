import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/actions/actions';
import './counter.css';


const Counter = () => {  
    
    const number = useSelector((state) => state.counterNumber.number)
    const dispatch = useDispatch()
    
    
    return (
        <>
            <section className="container_counter">
                <button onClick={e => dispatch(decrement())}> - </button>

                <div>
                    <h2>{number}</h2>
                    
                </div>

                <button onClick={e => dispatch(increment())}> + </button>
            </section>
        </>
    );
}

export default Counter;
