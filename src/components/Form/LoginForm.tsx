import {Button} from "components/Button";
import {Field, Form, withFormik} from "formik";
import React from 'react';
import {IHandleLoginActionType} from "store/domains/auth/action";
import {styled} from "styles";
import {InputField} from "./Input";

const Wrapper = styled.div`
  width: 25vh;
`;

interface ILoginFormProps {
  onSubmit: IHandleLoginActionType;
}

const InnerForm: React.FC = () => {
  return (
    <Wrapper>
      <Form>
        <Field
          type="username"
          name="username"
          component={InputField}
          label="username"
        />
        <Field
          type="password"
          name="password"
          component={InputField}
          label="password"
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </Wrapper>
  )
};

interface ILoginFormValues {
  username: string;
  password: string;
}

export const LoginForm = withFormik<ILoginFormProps, ILoginFormValues >({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  handleSubmit: ({ username, password }, { props }) => {
    props.onSubmit(username, password);
  }
})(InnerForm);

