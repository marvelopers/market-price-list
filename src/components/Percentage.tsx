import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { KORBIT_BLUE, KORBIT_RED } from 'src/styles/colors';

interface PercentageProps {
  num: number;
}
const Percentage = ({ num }: PercentageProps) => <StylePercentage plus={num >= 0}>{num.toFixed(2)}%</StylePercentage>;

export default Percentage;

const StylePercentage = styled.div(
  ({ plus }: { plus: boolean }) => css`
    text-align: right;
    color: ${plus ? KORBIT_RED : KORBIT_BLUE};
    text-align: right;
  `,
);
