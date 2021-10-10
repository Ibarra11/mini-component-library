/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let component;
  if (size === "large") {
    return <LargeBar width={value}><InnerBar width ={value}/></LargeBar>
  }
  else if (size === "medium") {
    return <MediumBar width={value}><InnerBar width={value}/></MediumBar>
  }
  else {
    return <SmallBar width={value}><InnerBar width={value}/></SmallBar>
  }

};

const BaseBar = styled.div.attrs(props => ({
  role: "progressbar",
  "aria-valuenow": props.width ,
  "aria-valuemin": "0",
  "aria-valuemax": "100"
  
}))`
  width: 370px;
  border-radius: 4px;
  background-color: ${COLORS.transparentGray15};
`
const LargeBar = styled(BaseBar)`
  height: 24px;
  padding: 4px;
  border-radius: 8px;
`

const MediumBar = styled(BaseBar)`
  height: 12px;
`

const SmallBar = styled(BaseBar)`
  height: 8px;
`

const InnerBar = styled.span`
  display: inline-block;
  width: ${p => p.width + "%"};
  height: 100%;
  vertical-align: top;
  background-color: red;
  border-top-left-radius:4px ;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${p => p.width > 99 && p.width < 99.5 ? "2px" : p.width > 99.5 ?  "4px" : null };
  border-bottom-right-radius: ${p => p.width > 99 && p.width < 99.5 ? "2px" : p.width > 99.5 ?  "4px" : null };
`

export default ProgressBar;
