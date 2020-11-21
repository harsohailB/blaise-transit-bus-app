import React from "react";
import styled from "styled-components";

const LegendEntry = styled.div`
  margin: 10px;
  color: #f7f7f7;

  &::before {
    color: ${(props) => props.color};
    content: "• ";
    font-size: 24px;
    font-weight: 900;
  }
`;

const Legend = () => {
  return (
    <div style={{ display: "flex" }}>
      <LegendEntry color="#b04040">Passenger</LegendEntry>
      <LegendEntry color="#89cff0">Bus Stop</LegendEntry>
    </div>
  );
};

export default Legend;
