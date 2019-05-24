import styled from 'styled-components';

import bgHeader from './img/background.jpg';
import bgHeaderMB from './img/background320.jpg';

export const Root = styled.div`
  height: 100%;
`;

export const Wrapper = styled.div`  
  width: 900px;
  height: 100%;
  margin: auto;
  @media all and (max-width: 910px) {
    width: 320px;
  }
`;

export const Content = styled.div`  
  margin-top: 40px;
  border-left: solid 1px #E0E0E0;
  
  @media all and (max-width: 910px) {
    border-left: none;
  }
`;

export const List = styled.ul`   
  @media all and (max-width: 910px) {
    padding-left: 0;
  }
`;

export const FontBI = styled.span`    
  font-weight: bold;
  font-style: italic;
`;

export const HeaderStyle = styled.div`  
  width: 100%;
  background-image: url(${bgHeader});
  background-repeat: no-repeat;
  background-position-x: center;
  height: 389px;
  
  @media all and (max-width: 910px) {
    background-image: url(${bgHeaderMB});
    background-size: contain;
  }
`;

export const Title = styled.h1`  
  margin-top: 56px;  
  font-family: Roboto;
  font-size: 48px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  
  @media all and (max-width: 910px) {
    font-size: 32px;
    margin-top: 119px;
    margin-left: 20px;
  }
`;

export const ContentTitle = styled.h2`  
  margin-top: 80px;
  font-family: Roboto;
  font-size: 42px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #303239;
  
  @media all and (max-width: 910px) {
    margin-top: 40px;
    font-size: 28px;
    line-height: 1.29;
    margin-left: 0px;
    margin-right: 20px;
  }
`;

export const Step = styled.div`
  margin-top: 60px;
  min-height: 620px;
  padding-left: 26px;
  position: relative;
  
  @media all and (max-width: 910px) {
    margin-top: 40px;
    padding-left: 0px;
  }
`;

export const StepFirst = styled(Step)`
  margin-top: 0;
  
  &:before {
    content: "";
    position: absolute;
    left: -1px;
    top: 0;
    width: 1px;
    height: 22px;
    background-color: #ffffff;
  }
  
  @media all and (max-width: 910px) {
    &:before {
        display: none;
    }
  }
`;

export const StepImage = styled.img`
  float: right;
  margin-right: 30px;
  @media all and (max-width: 910px) {
    float: none;
  }
`;

export const StepText = styled.div`  
  padding-right: 400px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #000000;  
  
  @media all and (max-width: 910px) {
    padding-right: 20px;
    font-size: 15px;
    line-height: 1.47;
  }
`;

export const StepTitle = styled.h3`
  margin-top: 1em;
  margin-bottom: 1em;
  padding-top: 10px;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #303239;
  
  &:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    left: -8px;
    top: 22px;
    width: 16px;
    height: 16px;
    background-color: #195dbd;
  }
  
  @media all and (max-width: 910px) {
    font-size: 24px;
    line-height: 1.33;
    margin-top: 0;
      
    &:before {
        display: none;
    }
  }
`;


