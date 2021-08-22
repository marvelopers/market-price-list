import React from 'react';
import * as Styles from './styles';

export interface LoaderProps {
  position?: string;
}

const Loader = ({ position = 'fixed' }: LoaderProps) => (
  <Styles.LoaderWrapper position={position}>
    <Styles.Loader>
      <div className="space ball" />
      <div className="space ball" />
      <div className="space ball" />
    </Styles.Loader>
  </Styles.LoaderWrapper>
);

export default Loader;
