/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, connect } from 'react-redux'
import './counter.css';


const Counter = () => {  
    
    const number = useSelector((state) => state)
    
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

export default connect()(Counter);
