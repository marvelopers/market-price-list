import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { ModalHandler } from 'src/utils/ModalHandler';
import { ModalType } from 'src/constants/modal';
import Layout from '../Layout';

const HomePage = () => {
  const showAlert = () => {
    ModalHandler.show(ModalType.Alert, {
      AlertMessage: '가상자산 시세목록 버튼을 클릭해주세요',
    });
  };

  useEffect(() => {
    showAlert();
  }, []);

  return (
    <Wrapper>
      <Layout />
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
`;
