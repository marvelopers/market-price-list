import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { KORBIT_SKY_BLUE } from 'src/styles/colors';

const Loader = () => (
  <StyledBallsSpinner>
    <div className="col">
      <div className="space ball" />
      <div className="space ball" />
      <div className="space ball" />
    </div>
  </StyledBallsSpinner>
);

export default Loader;

const spScaleAlpha = keyframes`
	0% { opacity: 1; }
	33% {  opacity: 0.25; }
	66% { opacity: 0.25; }
	100% {  opacity: 1; }
`;

const spScaleAlphaBefore = keyframes`
	0% { opacity: 0.25; }
	33% { opacity: 1; }
	66% { opacity: 0.25; }
`;

const spScaleAlphaAfter = keyframes`
	33% { opacity: 0.25; }
	66% { opacity: 1; }
	100% { opacity: 0.25; }
`;
const StyledBallsSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .col {
    padding: 10px;
  }
  .ball {
    border-radius: 50%;
    background-color: ${KORBIT_SKY_BLUE};
    width: 18px;
    height: 18px;
    transform-origin: center center;
    display: inline-block;
    margin: 5px;
  }

  .ball:nth-child(1) {
    background-color: rgba(#0ea5e9, 1);
    opacity: 0.25;
    -webkit-animation: ${spScaleAlphaBefore} 1s infinite linear;
    animation: ${spScaleAlphaBefore} 1s infinite linear;
  }

  .ball:nth-child(2) {
    background-color: rgba(#0ea5e9, 1);
    opacity: 1;
    -webkit-animation: ${spScaleAlpha} 1s infinite linear;
    animation: ${spScaleAlpha} 1s infinite linear;
  }

  .ball:nth-child(3) {
    background-color: rgba(#0ea5e9, 1);
    opacity: 0.25;
    -webkit-animation: ${spScaleAlphaAfter} 1s infinite linear;
    animation: ${spScaleAlphaAfter} 1s infinite linear;
  }
`;
