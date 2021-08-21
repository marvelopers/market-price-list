import styled from '@emotion/styled';
import { GREY_2 } from 'src/styles/colors';

export const Wrapper = styled.div`
  text-align: right;
  padding-right: 1.5rem;
  color: ${GREY_2};
  border: none;
`;

export const List = styled.select`
  width: 100px;
  height: 40px;
  border: none;
  background-color: transparent;
  color: ${GREY_2};
  font-size: 0.875rem;
  line-height: 1.25rem;
  cursor: pointer;

  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;

  &:focus {
    outline: none;
  }
`;

export const Item = styled.option`
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
