import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-flexa';

import InputContainer from './Input';
import Button from '../../../shared/Button';
import { StyledForm, StyledError } from './styles.css';
import { checkValuesAreEmpty, checkValuesAreDefined } from './helpers';
import { formWidth, formHeight, inputHeight } from '../../../styles/const';

const Form = ({ formName, showClearBtn, showText, importSubmitFunc, clearForm }) => {
    const [age, setAge] = useState('');
    const [text, setText] = useState('');
    const [country, setCountry] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);
    const [fieldsErrors, setFieldsErrors] = useState({ firstName: '', lastName: '', age: '', country: '' });

    useEffect(() => {
        checkFormIsValid();
    }, [firstName, lastName, age, country, fieldsErrors]);

    useEffect(() => {
        clearHandler();
    }, [clearForm]);

    const clearHandler = () => {
        setFirstName('');
        setLastName('');
        setAge('');
        setCountry('');
        setText('');
        setFieldsErrors({ firstName: '', lastName: '', age: '', country: '' });
    };

    const sumbitHandler = () => {
        if (!formIsValid) return;
        setText(`This is ${firstName} ${lastName} - ${age} years old from ${country}!`);
    };

    const validateField = (fieldName, value) => {
        const currentErrors = { ...fieldsErrors };
        currentErrors[fieldName] = '';
        switch (fieldName) {
            case 'age':
                if (value <= 0) currentErrors.age = 'Age should be positive value.';
                break;
            case 'firstName':
            case 'lastName':
                value.match(/^([A-Za-z]{1}('[A-Z])?[a-z]*(-[A-Z])?[[a-z]*?)$/)
                    ? null
                    : (currentErrors[fieldName] = `${
                          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
                      } is requred and should be valid.`);
                break;
            case 'country':
                value.match(/^([A-Za-z ]{2,})$/)
                    ? null
                    : (currentErrors[fieldName] = `${
                          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
                      } is requred and should be valid.`);
                break;
        }
        setFieldsErrors(currentErrors);
    };

    const checkFormIsValid = () => {
        const validValue = checkValuesAreEmpty(
            fieldsErrors.age,
            fieldsErrors.lastName,
            fieldsErrors.firstName,
            fieldsErrors.country
        );
        const notEmptyFields = checkValuesAreDefined(firstName, lastName, age, country);
        setFormIsValid(validValue && notEmptyFields);
    };

    return (
        <>
            <StyledForm width={`${formWidth}px`} height={`${formHeight}px`}>
                {formName ? (
                    <Row gutter='0px' justifyContent='center' style={{ width: '100%' }}>
                        <h2>{formName}</h2>
                    </Row>
                ) : null}

                <Row gutter='5px' justifyContent='space-between' style={{ width: '100%', height: '70%' }}>
                    <Col xs={5.5} gutter='0px'>
                        <InputContainer
                            height={`${inputHeight}px`}
                            type='text'
                            id='firstName'
                            label='First name'
                            placeholder='Enter your first name here'
                            value={firstName}
                            onChange={(e) => {
                                e.persist();
                                setFirstName(e.target.value);
                                validateField('firstName', e.target.value);
                            }}
                        />
                        {fieldsErrors.firstName ? <StyledError>{fieldsErrors.firstName}</StyledError> : null}
                    </Col>
                    <Col xs={5.5} gutter='0px'>
                        <InputContainer
                            height={`${inputHeight}px`}
                            type='text'
                            id='lastName'
                            label='Last name'
                            placeholder='Enter your last name here'
                            value={lastName}
                            onChange={(e) => {
                                e.persist();
                                setLastName(e.target.value);
                                validateField('lastName', e.target.value);
                            }}
                        />
                        {fieldsErrors.lastName ? <StyledError>{fieldsErrors.lastName}</StyledError> : null}
                    </Col>
                    <Col xs={5.5} gutter='0px'>
                        <InputContainer
                            height={`${inputHeight}px`}
                            type='number'
                            id='age'
                            label='Age'
                            placeholder='Enter your age here'
                            value={age}
                            onChange={(e) => {
                                e.persist();
                                setAge(() => e.target.value);
                                validateField('age', e.target.value);
                            }}
                        />
                        {fieldsErrors.age ? <StyledError>{fieldsErrors.age}</StyledError> : null}
                    </Col>
                    <Col xs={5.5} gutter='0px'>
                        <InputContainer
                            height={`${inputHeight}px`}
                            type='text'
                            id='country'
                            label='Country'
                            placeholder='Enter your country here'
                            value={country}
                            onChange={(e) => {
                                e.persist();
                                setCountry(() => e.target.value);
                                validateField('country', e.target.value);
                            }}
                        />
                        {fieldsErrors.country ? <StyledError>{fieldsErrors.country}</StyledError> : null}
                    </Col>
                </Row>

                <Row gutter='0px' justifyContent='space-between'>
                    {showClearBtn ? (
                        <Col xs={5.5} gutter='0px'>
                            <Button active={true} text='Clear' type='button' handleClick={clearHandler} />
                        </Col>
                    ) : null}
                    <Col xs={5.5} gutter='0px'>
                        <Button
                            active={formIsValid}
                            text='Sumbit'
                            type='button'
                            handleClick={
                                importSubmitFunc
                                    ? () => importSubmitFunc({ firstName, lastName, age, country })
                                    : sumbitHandler
                            }
                        />
                    </Col>
                </Row>
            </StyledForm>

            {text && showText ? (
                <Row gutter='0' style={{ margin: '80px' }}>
                    <Col xs={12} gutter='0px' style={{ color: 'blue' }}>
                        {text}
                    </Col>
                </Row>
            ) : null}
        </>
    );
};

export default Form;
