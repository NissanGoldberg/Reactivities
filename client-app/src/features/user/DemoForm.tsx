import React, { useContext } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import {Form, Button, Header} from 'semantic-ui-react';
import TextInput from '../../app/common/form/TextInput';
import { RootStoreContext } from '../../app/stores/rootStore';
import { IUserFormValues } from '../../app/models/user';
// import ErrorMessage from '../../app/common/form/ErrorMessage';

const DemoForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { login } = rootStore.userStore;
  return (
    <FinalForm
      onSubmit={(values: IUserFormValues) => 
        login({email: 'bob@test.com', password: 'Pa$$w0rd'})
      }
      render={({
        handleSubmit,
        submitting
      }) => (
        <Form onSubmit={handleSubmit} error>
          <Header
            as='h2'
            content='Login to Reactivities'
            color='teal'
            textAlign='center'
          />
          <Field name='email' defaultValue='bob@test.com' component={TextInput} placeholder='Email' />
          <Field
            name='password'
            component={TextInput}
            type='password'
            defaultValue='Pa$$w0rd'
          />
          <Button
            loading={submitting}
            color='teal'
            content='Login'
            fluid
          />
        </Form>
      )}
    />
  );
};

export default DemoForm;
