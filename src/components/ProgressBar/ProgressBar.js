/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  
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
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  /*
    We set overflow hidden to constrain the inner box to the this parent boxes shape.
    Only noticable when progress bar is near full  
  */
  overflow: hidden;
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
  background-color: ${COLORS.primary};
  border-top-left-radius:4px ;
  border-bottom-left-radius: 4px;
`

export default ProgressBar;
