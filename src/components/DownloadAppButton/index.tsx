import React from "react";
import { Button } from "@holism/core";

import {
  Icon,
} from './style'

interface IProps {
  url?: string;
  dimension?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
  children: any;
}

export function DownloadAppButton({children, isFullWidth, dimension = 'medium', url = '#'}: IProps) {
  return (
    <a href={url}>
      <Button
        isWithIcon={true}
        dimension={dimension}
        color="primary"
        isFullWidth={isFullWidth}
      >
        <Icon />
        <span>
          {children}
        </span>
      </Button>
    </a>
  )
}
