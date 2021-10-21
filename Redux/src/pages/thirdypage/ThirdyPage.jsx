import React from 'react';
import './thirdypage.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Counter from '../../components/Counter/Counter';
import { useSelector } from 'react-redux';

const Thirdypage = () => {

    const numero = useSelector((state) => state.counter.value)

    return (
        <>
            <header className="flex">
                <h1>Thirdy Page</h1>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

                    <Breadcrumb.Item href="/secondpage">Second Page</Breadcrumb.Item>

                    <Breadcrumb.Item active>Third Page</Breadcrumb.Item>
                </Breadcrumb>
            </header>
            <main>
                <Counter/>
            </main>
            <footer>
                <h1>{numero}</h1>
            </footer>
        </>
    );
}

export default Thirdypage;
