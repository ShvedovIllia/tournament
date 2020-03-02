import React from 'react';
import {IIconProps} from "components/Icon/types";

export const FileIcon: React.FC<IIconProps> = ({ width, height, color }) => (
  <svg viewBox="0 0 100.25 100.25" width={width} height={height} fill={color}>
    <path d="M79.567 29.924l-18.26-18.479A1.5 1.5 0 0060.24 11H20.5a1.5 1.5 0 00-1.5 1.5v75a1.5 1.5 0 001.5 1.5h58a1.5 1.5 0 001.5-1.5V30.979c0-.394-.155-.773-.433-1.055zM62 16.415L74.929 29.5H62V16.415zM22 86V14h37v17a1.5 1.5 0 001.5 1.5H77V86H22z" />
  </svg>
);
