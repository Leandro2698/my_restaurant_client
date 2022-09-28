/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';

function FormCheckbox({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <FormControlLabel
      control={(
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      )}
      {...other}
    />
  );
}

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
};
export default FormCheckbox;
