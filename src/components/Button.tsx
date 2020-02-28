import React from 'react';
import {styled} from "styles";

export const Button = styled.button`
  width: 100%;
  height: 5vh;
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.white};
  border-radius: 20px;
`;
