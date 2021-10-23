import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Counter from '../../components/Counter/Counter'
import { useSelector } from 'react-redux';
import { FooterStyled, HeaderStyled, MainStyled } from '../styled';
import { Link } from 'react-router-dom';
import Switchdark from '../../components/SwitchDark/SwitchDark';

const Secondpage = () => {

    const numero = useSelector((state) => state.counterNumber.number)
    const toggleState = useSelector((state) => state.turnOffOrOn.on)

    return (
        <>
            <HeaderStyled className="flex" toggleState={toggleState}>
                <h1>Second Page</h1>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

                    <Breadcrumb.Item active>Second Page</Breadcrumb.Item>

                    <Breadcrumb.Item href="/thirdypage">Third Page</Breadcrumb.Item>
                </Breadcrumb>
            </HeaderStyled>
            <MainStyled toggleState={toggleState}>
                <Counter />
            </MainStyled>
            <FooterStyled toggleState={toggleState}>
                <h1>{numero}</h1>
                <Link to="/thirdypage">Third Page</Link>
                <Switchdark />
            </FooterStyled>
        </>
    );
}

export default Secondpage;
