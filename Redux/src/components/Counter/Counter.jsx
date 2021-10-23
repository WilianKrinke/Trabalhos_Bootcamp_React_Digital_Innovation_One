import React from 'react';
import { useSelector } from 'react-redux'
import './counter.css';


const Counter = () => {  
    
    const number = useSelector((state) => state.counterNumber.number)
    
    return (
        <>
            <section className="container_counter">
                <button > - </button>

                <div>
                    <h2>{number}</h2>
                </div>

                <button> + </button>
            </section>
        </>
    );
}

export default Counter;
