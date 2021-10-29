import React from 'react';
// import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    // const { formState } = form;
    // const hasError = formState.touched[name] && formState.errors[name];

    return (
        <Controller
            render={({
                field: { onChange, onBlur, value, name, ref },
            }) => (
                <TextField
                    label={label}
                    value={value}
                    onChange={onChange}
                    inputRef={form} // wire up the input ref
                    disabled={disabled}
                    // error={!!hasError}

                    helperText="Incorrect entry."

                />
            )}

            name={name}
            control={form.control}
            rules={{ required: true }}
        />

    );
}


export default InputField;