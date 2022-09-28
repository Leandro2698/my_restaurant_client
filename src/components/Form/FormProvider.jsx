/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { FormProvider as Form } from 'react-hook-form';

function FormProvider({ children, onSubmit, methods }) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
export default FormProvider;

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
