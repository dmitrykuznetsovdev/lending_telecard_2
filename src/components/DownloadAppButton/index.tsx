import React from 'react';
import {Button, Link} from '@holism/core';

import {Icon} from './style';

interface IProps {
  url?: string;
  dimension?: 'small' | 'medium';
  isFullWidth?: boolean;
  children: any;
}

export function DownloadAppButton({
                                    children,
                                    isFullWidth,
                                    dimension = 'medium',
                                    url = '#',
                                  }: IProps) {

  return (
    <Link
      target="_blank"
      href={url}>
      <Button
        isWithIcon={true}
        dimension={dimension}
        color="primary"
        isFullWidth={isFullWidth}
      >
        <Icon/>
        <span>{children}</span>
      </Button>
    </Link>
  );
}
