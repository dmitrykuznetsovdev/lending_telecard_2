import React from "react";

import {IconLogo} from "../../components/Icons";

import {
  HeaderStyle,
  Title,
} from './style';

export function Header() {
  return (
    <HeaderStyle>
      <>
        <IconLogo />
        <Title>
          Телекард 2.0 для iOS
        </Title>
      </>
    </HeaderStyle>
  )
}
