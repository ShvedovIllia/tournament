import React from 'react';
import {IIconProps} from "components/Icon/types";

export const MessageIcon: React.FC<IIconProps> = ({width, height, color}) => (
  <svg
    viewBox="0 0 24 24"
    width={width}
    height={height}
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill={'rgb(0,0,0,0)'}
  >
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
  </svg>
);
