import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log();

  function handleSelect() {
    console.log(displayedValue)
  }
  return (
    <Wrapper>
    <Dropdown value={value} onChange={onChange}>
      {children}
      </Dropdown>
      {/* <IconWrapper><Icon id="chevron-down" size={16} /></IconWrapper> */}
      <Icon id="chevron-down" size={16} onClick={handleSelect()} />
    </Wrapper>
  );
};


const Wrapper = styled.div`

  width: max-content;
  position: relative;
 
  & >:nth-child(2){
  position: absolute;
  height: 100%;
    padding-left: 24px;
    padding-right: 28px;
   right:0;
   top: 0;
  
    border-top-right-radius: 8px;
   border-bottom-right-radius: 8px;
  
   svg{
     margin: auto;
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
   
   }
  }
`

const Dropdown = styled.select`
  width: fit-content;
  -webkit-appearance: none;
  border: none;
  padding: 12px 0;
  padding-left: 16px;
  padding-right: 52px;
  font-size: 1rem;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px ;
  background-color: ${COLORS.transparentGray15};
`





export default Select;