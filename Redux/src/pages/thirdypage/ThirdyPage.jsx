import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Counter from "../../components/Counter/Counter";
import { useSelector } from "react-redux";
import { FooterStyled, HeaderStyled, MainStyled } from "../styled";

const Thirdypage = () => {
  const toggleState = useSelector((state) => state.turnOffOrOn.on);
  const number = useSelector((state) => state.counterNumber.number);

  return (
    <>
      <HeaderStyled className="flex" toggleState={toggleState}>
        <h1>Thirdy Page</h1>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

          <Breadcrumb.Item href="/secondpage">Second Page</Breadcrumb.Item>

          <Breadcrumb.Item active>Third Page</Breadcrumb.Item>
        </Breadcrumb>
      </HeaderStyled>
      <MainStyled toggleState={toggleState}>
        <Counter />
      </MainStyled>
      <FooterStyled toggleState={toggleState}>
        <h1>{number}</h1>
      </FooterStyled>
    </>
  );
};

export default Thirdypage;
