import React from 'react';
import './secondpage.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Counter from '../../components/Counter/Counter'

const Secondpage = () => {
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
                
            </footer>
        </>
    );
}

export default Secondpage;
