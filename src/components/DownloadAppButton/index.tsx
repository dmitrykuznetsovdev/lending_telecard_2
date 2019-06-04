import React from "react";
import {Button} from "@holism/core";

import {
  Icon,
} from './style'

interface IProps {
  url?: string;
  dimension?: 'small' | 'medium';
  isFullWidth?: boolean;
  children: any;
}

export function DownloadAppButton({children, isFullWidth, dimension = 'medium', url = '#'}: IProps) {
  function onClick() {
    if(url && window) {
      window.location.href = url;
    }
  }

  return (
    <Button
      isWithIcon={true}
      dimension={dimension}
      color="primary"
      isFullWidth={isFullWidth}
      onClick={onClick}
    >
      <Icon/>
      <span>
          {children}
        </span>
    </Button>
  )
}
