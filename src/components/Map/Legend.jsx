import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vw;
  z-index: 9999999;

  @media (max-width: 1100px) {
    width: 90vw;
    margin-left: 10px;
  }
`;

const LegendWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #343433;
  border-radius: 15px;
  box-shadow: 5px 5px 32px 5px rgba(0, 0, 0, 0.61);

  @media (max-width: 1100px) {
    align-items: flex-start;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const LegendEntry = styled.div`
  margin: 10px;
  color: #f7f7f7;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;

  &::before {
    color: ${(props) => props.color};
    content: "• ";
    font-weight: 900;
  }

  @media (max-width: 1100px) {
    margin: 5px;
    font-size: 10px;
  }
`;

const Text = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 30px;
  color: #f7f7f7;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const Legend = () => {
  return (
    <Wrapper>
      <LegendWrapper>
        <LegendEntry color="#b04040">Passenger</LegendEntry>
        <LegendEntry color="#89cff0">Bus Stop</LegendEntry>
        <LegendEntry color="#00cdac">Route to Nearest Bus Stop</LegendEntry>
        <Text>
          <strong>Hover</strong> over bus stops to get passenger info
        </Text>
      </LegendWrapper>
    </Wrapper>
  );
};

export default Legend;
