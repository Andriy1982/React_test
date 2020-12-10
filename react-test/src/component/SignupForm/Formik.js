import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import {
  Form,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './SignupFormStyledComponent';

const numberRegex = RegExp(/[0-9]{3}-[0-9]{2}-[0-9]{2}?$/);

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'The name must be longer than 2 characters')
    .max(20, 'The name must be max 20 characters')
    .required(' Name is required'),
  number: yup
    .string()
    .matches(numberRegex, 'Invalid number')
    .required('Number is required'),
});

export default class SignupForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const { name, number } = values;
          this.props.onAddContact({ id: uuidv4(), name, number });
          resetForm();
        }}
        render={({ errors, values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormLabel>
              Name
              {errors.name && <Text>{errors.name}</Text>}
              <FormInput
                border={errors.name && '1px solid red'}
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
                placeholder="Name*"
              />
            </FormLabel>
            <FormLabel>
              Number
              {errors.number && <Text color="red">{errors.number}</Text>}
              <FormInput
                border={errors.number && '1px solid red'}
                type="string"
                value={values.number}
                name="number"
                onChange={handleChange}
                placeholder="111-11-11*"
              />
            </FormLabel>
            <FormButton type="submit">Add contact</FormButton>
          </Form>
        )}
      />
    );
  }
}
