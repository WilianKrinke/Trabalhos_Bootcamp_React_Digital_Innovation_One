/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FooterStyled, HeaderStyled, MainStyled } from "../styled";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Counter from "../../components/Counter/Counter";
import Sentence from "../../components/Sentence/Sentence";
import Switchdark from "../../components/SwitchDark/SwitchDark";
import { useState } from "react";

const Home = () => {
  const number = useSelector((state) => state.counterNumber.number);
  const toggleState = useSelector((state) => state.turnOffOrOn.on);

  const [loadingState, setloadingState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloadingState(false);
    }, 1000);
  }, []);

  return (
    <>
      {loadingState ? (
        <>
          <h1>Loading....</h1>
        </>
      ) : (
        <>
          <HeaderStyled className="flex" toggleState={toggleState}>
            <h1>Home</h1>
            <Breadcrumb>
              <Breadcrumb.Item active>Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/secondpage">Second Page</Breadcrumb.Item>
              <Breadcrumb.Item href="/thirdypage">Third Page</Breadcrumb.Item>
            </Breadcrumb>
          </HeaderStyled>
          <MainStyled toggleState={toggleState}>
            <Counter />
            <Sentence />
          </MainStyled>
          <FooterStyled toggleState={toggleState}>
            <h1>{number}</h1>
            <Link to="/secondpage">Second Page</Link>
            <Switchdark />
          </FooterStyled>
        </>
      )}
    </>
  );
};

export default Home;
