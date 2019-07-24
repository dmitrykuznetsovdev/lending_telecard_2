import styled from 'styled-components';

import bannerIos from './ios/banner.png';
import bannerAndroid from './android/banner.png';
import { IProps } from './header';

export const HeaderStyle = styled.div<Partial<IProps>>`
  padding: 15px;
  background-image: ${({ system }) =>
    system === 'ios' ? `url(${bannerIos})` : `url(${bannerAndroid})`};
  background-repeat: no-repeat;
  background-position-x: center;
  height: 389px;

  @media all and (max-width: 910px) {
    background-position: 85%;
    background-size: cover;
  }
`;

export const Title = styled.h1`
  margin-top: 56px;  
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
  }
`;
