import styled from '@emotion/styled';
import { BACKGROUND_GREY, GREY_2, GREY_3 } from 'src/styles/colors';

export const Wrapper = styled.div`
  text-align: right;
  padding-right: 1.5rem;
  color: ${GREY_2};
  padding-bottom: 8px;
`;

export const List = styled.select`
  max-width: 120px;
  height: 40px;
  border: none;
  background-color: ${BACKGROUND_GREY};
  border-radius: 0.25rem;
  padding: 0.25rem 1.5rem;
  color: ${GREY_3};
  font-weight: 600;
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
