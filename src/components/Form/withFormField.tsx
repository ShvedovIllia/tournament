import {ErrorMessage, FieldProps, FormikHandlers, FormikHelpers, getIn} from 'formik';
import * as React from 'react';
import {useTranslation} from 'react-i18next';

import {styled} from 'styles';
import {H3} from "../Text";

export interface IFormFieldProps {
  label?: string;
  hint?: string;
  disabled?: boolean;
}

export interface IFormComponent<Values = any, Value = any> {
  className?: string;
  invalid?: boolean;
  name: string;
  setFocus: (val: boolean) => void;
  setFieldValue: FormikHelpers<Values>['setFieldValue'];
  setTouched: FormikHelpers<Values>['setTouched'];
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  value: Value;
  disabled?: boolean;
  onFocus?: (e: any) => void;
}

interface IWrapperProps {
  hasLabel: boolean;
  disabled: boolean;
  invalid: boolean;
  isFocused: boolean;
}

const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  padding-top: 20px;

  ${({ disabled, invalid, isFocused, hasLabel, theme }) =>
  hasLabel &&
  ` 
      position: relative;

      .label {
        position: absolute;
        top: 0;
        left: 0;
        color: ${invalid ? theme.color.error : isFocused ? theme.color.primary : theme.color.white};
        ${disabled && 'opacity: 0.5;'}
      }

      ${!disabled &&
  !invalid &&
  !isFocused &&
  `
        .field-component:hover ~ .label {
          color: ${theme.color.white};
        }
      `}

      .field-component:focus ~ .label {
        color: ${theme.color.primary};
      }
    `}

  .error {
    color: ${({ theme }) => theme.color.error};
  }

  .hint {
    color: ${({ theme }) => theme.color.white};
    ${({ disabled }) => disabled && 'opacity: 0.5;'}
  }
`;

const withFormField = <OriginalProps extends {}>(Component: React.ComponentType<IFormComponent | OriginalProps>) => ({
                                                                                                                       field,
                                                                                                                       form,
                                                                                                                       label,
                                                                                                                       hint,
                                                                                                                       ...props
                                                                                                                     }: IFormFieldProps & FieldProps) => {
  const { t } = useTranslation();
  const [isFocused, setFocus] = React.useState(false); // Solution for focusing Label on Select focus event
  const invalid =
    getIn(form.errors, field.name) && getIn(form.touched, field.name) && typeof form.errors[field.name] !== 'object';

  return (
    <Wrapper
      className="form-field"
      hasLabel={label !== undefined}
      disabled={props.disabled === true}
      invalid={invalid}
      isFocused={isFocused}
    >
      <Component
        invalid={invalid}
        setFocus={setFocus}
        setFieldValue={form.setFieldValue}
        setTouched={form.setTouched}
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name}>
        {(msg: any) => typeof msg !== 'object' && <H3 className="error">{t(msg)}</H3>}
      </ErrorMessage>
    </Wrapper>
  );
};

export default withFormField;
