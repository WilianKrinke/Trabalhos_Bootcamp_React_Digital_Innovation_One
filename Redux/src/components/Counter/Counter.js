import React from 'react';
import './counter.css';

const Counter = () => {
    return (
        <>
            <section className="container_counter">
                <button> - </button>

                <div>
                    <h2>Numero</h2>
                </div>

                <button> + </button>
            </section>
        </>
    );
}

export default Counter;