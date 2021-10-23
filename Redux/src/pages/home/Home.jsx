import React from 'react';
import './home.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Counter from '../../components/Counter/Counter'
import Sentence from '../../components/Sentence/Sentence';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Switchdark from '../../components/SwitchDark/SwitchDark';


const Home = () => {

    // para pegar estados iniciais
    const number = useSelector((state) => state.counterNumber.number)

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
                <h1>{number}</h1>
                <Link to="/secondpage">Second Page</Link>
                <Switchdark />
            </footer>

        </>
    );
}

export default Home;
