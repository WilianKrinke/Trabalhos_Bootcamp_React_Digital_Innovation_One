import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Counter from '../../components/Counter/Counter'
import { useSelector } from 'react-redux';
import './secondpage.css'

const Secondpage = () => {

    const numero = useSelector((state) => state.counter.value)

    return (
        <>
            <header className="flex">
                <h1>Second Page</h1>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

                    <Breadcrumb.Item active>Second Page</Breadcrumb.Item>

                    <Breadcrumb.Item href="/thirdypage">Third Page</Breadcrumb.Item>
                </Breadcrumb>
            </header>
            <main>
                <Counter />
            </main>
            <footer>
                <h1>{numero}</h1>
            </footer>
        </>
    );
}

export default Secondpage;
