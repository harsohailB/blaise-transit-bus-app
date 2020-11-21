import React from "react";
import styled from "styled-components";

import BlaiseLogoPath from "../assets/images/blaise_logo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 6vh;
  background-color: #00cdac;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    height: 8vh;
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 180px;
  height: auto;
  margin-left: 49.5px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #f7f7f7;
  margin-right: 49.5px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Image src={BlaiseLogoPath} />
      <Text>
        Coding Challenge Bus App by <strong>Harsohail Brar</strong>
      </Text>
    </Wrapper>
  );
};

export default Navbar;
