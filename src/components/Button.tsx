import React from 'react';
import {styled} from "styles";

interface IButtonProps {
  color?: string;
  background?: string;
}

export const Button = styled.button<IButtonProps>`
  width: 100%;
  height: 5vh;
  background: ${({ theme, background }) => `linear-gradient(to right, ${background ? background : theme.color.primary} , ${theme.color.backgroundPrimary})`};
  color: ${({ theme, color }) => color ? color : theme.color.white};
  border-radius: 20px;
  border: none;
`;

const IconButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
`;

export interface IIconButtonProps {
  icon: React.ReactElement;
}

export const IconButton: React.FC<IIconButtonProps> = ({icon}) => (
  <IconButtonWrapper>{icon}</IconButtonWrapper>
);
