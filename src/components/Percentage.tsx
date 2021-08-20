import React from 'react';
import styled from '@emotion/styled';

interface PercentageProps {
  num: number;
}
const Percentage = ({ num }: PercentageProps) => <StylePercentage>{num}</StylePercentage>;

export default Percentage;

const StylePercentage = styled.div``;
