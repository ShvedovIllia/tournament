import withFormField from "components/Form/withFormField";
import {styled} from "styles";

export const Input = styled.input`
  height: 35px;
  padding: 10px;
  border: solid 1px ${({ theme }) => theme.color.white};
  border-radius: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  &:focus {
    border: solid 1px ${({ theme }) => theme.color.primary};
  }
  font-size: 16px;
`;

export const InputField = withFormField(Input);
