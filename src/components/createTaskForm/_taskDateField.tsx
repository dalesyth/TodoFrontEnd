import React, { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
  // Destructure props
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="MM/dd/yyyy"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
