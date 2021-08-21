import React, { useCallback, useState } from 'react';
import SelectCurrency from 'src/components/SelectCurrency';
import * as Styles from './styles';

interface TabBarProps {
  initIndex: number;
  tabList: string[];
  children: React.ReactChild[];
}

export const TabBar = ({ initIndex, tabList, children }: TabBarProps) => {
  const [tabIndex, setTabIndex] = useState(initIndex);

  const handleClickTab = useCallback((index: number) => {
    setTabIndex(index);
  }, []);

  return (
    <>
      <Styles.TabList>
        {tabList.map((tab, index) => (
          <Styles.Tab visible={tabIndex === index} onClick={() => handleClickTab(index)} key={tab}>
            {tab}
          </Styles.Tab>
        ))}
      </Styles.TabList>
      <SelectCurrency />
      {children.map((child, index) => (
        <Styles.TabPanel visible={tabIndex === index}>{child}</Styles.TabPanel>
      ))}
    </>
  );
};
