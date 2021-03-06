import React from 'react';
import {IIconProps} from "../types";

export const MonitorIcon: React.FC<IIconProps> = ({width, height, color}) => (
  <svg viewBox="0 0 129 129" width={width} height={height} fill={color}>
    <path d="M118.5 10.5h-108c-2.3 0-4.1 1.8-4.1 4.1V87.4c0 2.3 1.8 4.1 4.1 4.1h49.9v18.8H37.5c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1h54c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1H68.6V91.5h49.9c2.3 0 4.1-1.8 4.1-4.1V14.6c0-2.3-1.8-4.1-4.1-4.1zm-4.1 72.8H14.6v-13h99.8v13zm0-21.1H14.6V18.7h99.8v43.5z" />
  </svg>
);
