import React from 'react';
import './home.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Counter from '../../components/Counter/Counter'


const Home = () => {

    return (
        <>
            <header className="flex">
                <h1>Home</h1>
                <Breadcrumb>
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>

                    <Breadcrumb.Item href="/secondpage">Second Page</Breadcrumb.Item>

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

export default Home;
