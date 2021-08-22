import styled from '@emotion/styled';
import { GREY_2, GREY_5 } from 'src/styles/colors';
import { Button } from '../../common/Button';

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export const ButtonWrapper = styled.div`
  border-bottom: 1px solid ${GREY_5};
  max-width: 1280px;
  height: 40px;
  margin: auto;
  text-align: center;
`;

export const LoadMore = styled(Button)`
  padding: 0.6rem 3rem;
  margin: 2px auto;
  color: ${GREY_2};
  font-size: 1rem;
  font-weight: 600;
`;
