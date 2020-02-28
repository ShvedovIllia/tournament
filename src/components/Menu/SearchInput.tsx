import React from 'react';
import {styled} from "../../styles";

const Input = styled.input`
   height: 23px;
   padding: 10px;
    border: solid 1px ${({ theme }) => theme.color.white};
    border-radius: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
    &:focus {
    border: solid 1px ${({ theme }) => theme.color.primary};
  }
    margin-left: 10px;
`;

export const SearchInput: React.FC = () => {
  return (
    <Input placeholder='Search'/>
    )
};
