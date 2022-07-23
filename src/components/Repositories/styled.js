import styled from "styled-components";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 50%;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #CCC;
  padding: 8px;
  margin-right: 8px;
  user-select: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.is-selected {
    color: white;
    font-weight: 600;
    background-color: #1da1f2;
    border: 2px #0b5888 ;
  }
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTabPanel = styled(TabPanel)`
  padding: 8px;
  /* border: 1px solid #66757F;
  border-radius: 4px; */
  display: none;

  &.is-selected {
    display: block;
  }
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;  
`;

