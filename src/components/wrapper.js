import React from 'react';
import styled from 'styled-components';


function WrapperComponent(props) {
  const Wrapper = styled.div`
    position: relative;
    background-image: url(${props => props.image});
    width: 100%;
    height: 100vh;

    h1 {
      text-decoration: none;
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      margin: auto;
      background-color: ${props => props.color};
      z-index: 1;
    }

    a {
      color: inherit;
    }
    `;
  const BackgroundImage = styled.img`
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  `;

  const { image } = props;
  console.log(props.color);
  return (
    <Wrapper>
      {props.children}
      <BackgroundImage src={image} />
    </Wrapper>
  )
}

export default WrapperComponent