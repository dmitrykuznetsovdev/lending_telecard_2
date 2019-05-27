import React from "react";

import {IconLogo} from "../../components/Icons";
import {Wrapper} from "../../components/StepInstall/style";

import {
  HeaderStyle,
  Title
} from './style';


export interface IProps {
  title: string;
  system: 'ios' | 'android';
}

export function Header({system, title}: IProps) {
  return (
    <HeaderStyle system={system}>
      <Wrapper>
        <IconLogo/>
        <Title>
          {title}
        </Title>
      </Wrapper>
    </HeaderStyle>
  )
}
