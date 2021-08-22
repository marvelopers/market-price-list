import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { MenuType, MenuList } from 'src/constants/menu';
import * as Styles from './styles';

export const MenuBar = () => {
  const history = useHistory();
  const asPath = useMemo(() => history.location.pathname, [history.location.pathname]);
  const handleClickTab = useCallback(
    (key: MenuType) => {
      history.push(`/${key}`);
    },
    [history],
  );

  return (
    <Styles.Wrapper>
      <Styles.List>
        {Object.keys(MenuList).map((key) => (
          <Styles.Menu selected={asPath.includes(key)} onClick={() => handleClickTab(key as MenuType)} key={key}>
            {MenuList[key as MenuType]}
          </Styles.Menu>
        ))}
      </Styles.List>
    </Styles.Wrapper>
  );
};
