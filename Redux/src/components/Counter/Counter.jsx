/* eslint-disable no-unused-vars */
import React from 'react';
import {useDispatch} from 'react-redux';
import './counter.css';


const Counter = () => {    
    
    return (
        <>
            <section className="container_counter">
                <button> - </button>

                <div>
                    <h2>numero</h2>
                </div>

                <button> + </button>
            </section>
        </>
    );
}

export default Counter;
