import React from 'react';
import './home.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Counter from '../../components/Counter/Counter'
import { Link } from 'react-router-dom';
import Sentence from '../../components/Sentence/Sentence';


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
                <Sentence />
            </main>
            <footer>
                <h1>0</h1>
                <Link to="/secondpage">Second Page</Link>
            </footer>

        </>
    );
}

export default Home;
