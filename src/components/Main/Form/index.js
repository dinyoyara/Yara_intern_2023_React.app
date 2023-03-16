import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-flexa';

import Input from './Input';
import StyledForm from './styledForm';
import Button from '../../../shared/Button';
import { inputSize } from '../../../styles/const';
import { checkValuesAreEmpty, checkValuesAreDefined } from '../helpers/checkValuesAreDefined';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [text, setText] = useState('');
    const [fieldsErrors, setFieldsErrors] = useState({ firstName: '', lastName: '', age: '' });
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        checkFormIsValid();
    }, [firstName, lastname, age, fieldsErrors]);

    const clearHandle = () => {
        setFirstName('');
        setLastName('');
        setAge(0);
        setText('');
    };

    const sumbitHandle = () => {
        if (!formIsValid) return;
        setText(`This is ${firstName} ${lastname} - ${age} years old!`);
    };

    const validateField = (fieldName, value) => {
        const currentErrors = { ...fieldsErrors };
        currentErrors[fieldName] = '';
        switch (fieldName) {
            case 'age':
                const currAge = Number(value);
                if (currAge == 0) currentErrors.age = 'Age is required and should be valid.';
                if (currAge < 0) currentErrors.age = 'Age should be positive value.';
                break;
            case 'firstName':
            case 'lastName':
                value.match(/^([A-Za-z]{1}('[A-Z])?[a-z]*(-[A-Z])?[[a-z]*?)$/)
                    ? null
                    : (currentErrors[fieldName] = `${fieldName} is requred and should be valid.`);
                break;
        }
        setFieldsErrors(currentErrors);
    };

    const checkFormIsValid = () => {
        const validValue = checkValuesAreEmpty(fieldsErrors.age, fieldsErrors.lastName, fieldsErrors.firstName);
        const notEmptyFields = checkValuesAreDefined(firstName, lastname, age);
        console.log(validValue, notEmptyFields);
        setFormIsValid(validValue && notEmptyFields);
    };

    return (
        <>
            <StyledForm width={`${inputSize}px`}>
                <Input
                    type='text'
                    id='firstName'
                    label='First name'
                    placeholder='Enter your first name here'
                    width={`${inputSize}px`}
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                        validateField('firstName', e.target.value);
                    }}
                />
                {fieldsErrors.firstName ?? <div>{fieldsErrors.firstName}</div>}
                <Input
                    type='text'
                    id='lastName'
                    label='Last name'
                    placeholder='Enter your last name here'
                    width={`${inputSize}px`}
                    value={lastname}
                    onChange={(e) => {
                        e.persist();
                        setLastName(e.target.value);
                        validateField('lastName', e.target.value);
                    }}
                />
                {fieldsErrors.lastName ?? <div>{fieldsErrors.lastName}</div>}
                <Input
                    type='number'
                    id='age'
                    label='Age'
                    placeholder='Enter your age here'
                    width={`${inputSize}px`}
                    value={age}
                    onChange={(e) => {
                        e.persist();
                        setAge(() => e.target.value);
                        validateField('age', e.target.value);
                    }}
                />
                {fieldsErrors.age ?? <div>{fieldsErrors.age}</div>}
                <Row gutter='0px' justifyContent='space-between'>
                    <Col xs={4} gutter='0px'>
                        <Button text='Clear' type='button' handleClick={clearHandle} />
                    </Col>
                    <Col xs={4} gutter='0px'>
                        <Button text='Sumbit' type='button' handleClick={sumbitHandle} />
                    </Col>
                </Row>
            </StyledForm>

            {text ? (
                <Row gutter='0' style={{ margin: '50px' }}>
                    <Col xs={12} gutter='0px' style={{ color: 'blue' }}>
                        {text}
                    </Col>
                </Row>
            ) : null}
        </>
    );
};

export default Form;
