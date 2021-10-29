import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




TodoFrom.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoFrom(props) {
    const schema = yup.object({
        title: yup.string().required('nhập đi')
        // .min(5, "title is too short"),

    }).required();
    const form = useForm({
        defaultValues: {
            title: '',
            resolver: yupResolver(schema),
        },
    });
    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            TodoFrom
            <InputField name='title' label='TynTyn' form={form}></InputField>
        </form>
    );
}

export default TodoFrom;