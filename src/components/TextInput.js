import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ValidationMessage from './ValidationMessage';

const TextInput = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => (
  <FormGroup
    controlId={input.name}
    validationState={
      touched ? (
        error ? 'error' : warning ? 'warning' : 'success'
      ) : null
    }
  >
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} placeholder={placeholder} type={type} />
    <FormControl.Feedback />
    <ValidationMessage touched={touched} error={error} warning={warning} />
  </FormGroup>
);

export default TextInput;
