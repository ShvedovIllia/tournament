import React from 'react';

import {styled} from 'styles';

interface IUserAvatarProps extends IAvatarWrapperProps, INameInShapeProps {
  name: string;
}

interface IAvatarWrapperProps {
  size: number;
}

interface INameInShapeProps {
  textSize: number;
}

const AvatarWrapper = styled.div<IAvatarWrapperProps>`
  display: flex;
  fled-direction: column;
  border-radius: 50%;
  width: ${({ size }) => size}vh;
  height: ${({ size }) => size}vh;
  justify-content: center;
  align-items: center;
  margin-vertical: 2%;
  background-color: ${({ theme }) => theme.color.white};
`;

const NameInShape = styled.text<INameInShapeProps>`
  color: ${({ theme }) => theme.color.backgroundPrimary};
  font-size: ${({ textSize }) => textSize};
  font-weight: bold;
`;

export const UserAvatar: React.FC<IUserAvatarProps> = ({
                                                         size,
                                                         name,
                                                         textSize,
                                                       }) => {
  return (
    <AvatarWrapper size={size}>
      <NameInShape textSize={textSize}>{name}</NameInShape>
    </AvatarWrapper>
  );
};
