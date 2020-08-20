import React from 'react';
import styled from 'styled-components';

import pride from '../images/pride.jpg';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: url('${pride}');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  a, h1 {
    text-decoration: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
    color: black;
    z-index: 1;
  }
`;
function Pride() {
  return (
    <Wrapper>
      <h1>Pride</h1>
    </Wrapper>
  );
}

export default Pride;