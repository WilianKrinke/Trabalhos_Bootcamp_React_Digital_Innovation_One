import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FooterStyled, HeaderStyled, MainStyled } from "../styled";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Counter from "../../components/Counter/Counter";
import Sentence from "../../components/Sentence/Sentence";
import Switchdark from "../../components/SwitchDark/SwitchDark";

const Home = () => {
  const number = useSelector((state) => state.counterNumber.number);
  const toggleState = useSelector((state) => state.turnOffOrOn.on);

  const [testeBool, setTesteBool] = useState(false);
  const [testeBool2, setTesteBool2] = useState(false);
  const [testeBool3, setTesteBool3] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTesteBool(true);
      setTimeout(() => {
        setTesteBool2(true);
        setTimeout(() => {
          setTesteBool3(true);
        }, 700);
      }, 700);
    }, 500);
  }, []);

  return (
    <>
      <HeaderStyled
        className="flex"
        toggleState={toggleState}
        teste={testeBool}
      >
        <h1>Home</h1>
        <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>

          <Breadcrumb.Item href="/secondpage">Second Page</Breadcrumb.Item>

          <Breadcrumb.Item href="/thirdypage">Third Page</Breadcrumb.Item>
        </Breadcrumb>
      </HeaderStyled>
      <MainStyled toggleState={toggleState} teste={testeBool2}>
        <Counter />
        <Sentence />
      </MainStyled>
      <FooterStyled toggleState={toggleState} teste={testeBool3}>
        <h1>{number}</h1>
        <Link to="/secondpage">Second Page</Link>
        <Switchdark />
      </FooterStyled>
    </>
  );
};

export default Home;
