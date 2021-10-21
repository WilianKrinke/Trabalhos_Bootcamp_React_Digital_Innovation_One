import React from 'react';
import './thirdypage.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Counter from '../../components/Counter/Counter';

const Thirdypage = () => {
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
                
            </footer>
        </>
    );
}

export default Thirdypage;
