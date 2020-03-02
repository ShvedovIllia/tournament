import React from 'react';
import {styled} from "styles";
import {i18nService} from "services";
import {IconButton, SearchIcon} from "components";

const Input = styled.input`
   padding: 10px;
    border: solid 1px ${({theme}) => theme.color.white};
    border-radius: 10px;
  background-color: transparent;
  color: ${({theme}) => theme.color.white};
    &:focus {
    border: solid 1px ${({theme}) => theme.color.primary};
  }
    margin-left: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
`;

export const SearchInput: React.FC = () => {
  const t = i18nService.t('common');
  return (
    <Row>
      <Input placeholder={t('search')}/>
      <IconButton icon={<SearchIcon/>}/>
    </Row>
  )
};
