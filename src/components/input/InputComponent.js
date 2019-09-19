import React, { useState } from 'react';
import { patternArray } from '../../error/InputErrorPattern';

const Input = ({
  handleChange,
  label,
  Type,
  Pattern = '',
  Required = false,
  id,
  ...otherProps
}) => {
  const [inputError, setInputError] = useState(false);
  const [inputMessage, setInputMessage] = useState('Please enter valid data');

  const handleError = e => {
    const {
      valueMissing,
      patternMismatch,
      rangeOverflow,
      rangeUnderflow,
      tooShort,
      tooLong
    } = e.target.validity;
    setInputError(!e.target.checkValidity());
    if (valueMissing)
      setInputMessage(`${label} ${patternArray[Type]['valueMissing']}`);
    if (patternMismatch)
      setInputMessage(`${label} ${patternArray[Type]['patternMismatch']}`);
    if (rangeOverflow)
      setInputMessage(`${label} ${patternArray[Type]['rangeOverflow']}`);
    if (rangeUnderflow)
      setInputMessage(`${label} ${patternArray[Type]['rangeUnderflow']}`);
    if (tooShort)
      setInputMessage(`${label}  ${patternArray[Type]['tooShort']}`);
    if (tooLong) setInputMessage(`${label} ${patternArray[Type]['tooLong']}`);
  };

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control has-icons-right">
        <input
          className={`input ${inputError ? 'is-danger' : 'is-primary'}`}
          type={Type}
          pattern={patternArray[Type] ? patternArray[Type].pattern : Pattern}
          required={Required}
          onChange={handleChange}
          onBlur={handleError}
          {...otherProps}
        />
        {inputError ? (
          <span className="icon is-small is-danger is-right">
            <i className="fas fa-exclamation-triangle is-danger" />
          </span>
        ) : null}
      </div>
      {inputError ? <p className="help is-danger">{inputMessage}</p> : null}
    </div>
  );
};

export default Input;
