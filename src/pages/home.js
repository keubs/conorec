import React from 'react';
import styled from 'styled-components';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


const Circle = styled.div`
  border-radius: 9999px;
  position: absolute;
  z-index: -1;
`;
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;
const Red = styled(Circle)`
  background: red;
  width: 700px;
  height: 700px;
  border-radius: 9999px;
  top: 50%;
  left: -350px;
  transform: translateY(-50%);
`;

const Blue = styled(Circle)`
  width: 400px;
  height: 400px;
  background: blue;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
`;

const Orange = styled(Circle)`
  width: 150px;
  height: 150px;
  top: 50%;
  transform: translateY(-50%);
  background-color: orangered;
  left: 0%;
  right: -70%;
  margin: 0 auto;
`;

const Name = styled.h1`
  margin: 42vh 0;
`

function Home() {
  return(
    <ParallaxProvider>
      <Wrapper>
          <h1>About</h1>
            <Name>Conor Rechtschaffner - Senior Art Director</Name>
          <h1>Work</h1>
          <Red />
          <Blue />
          <Orange />
      </Wrapper>
    </ParallaxProvider>
  );
}

export default Home;