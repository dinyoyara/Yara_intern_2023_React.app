import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-flexa';

import Input from './Input';
import StyledForm from './style.css';
import Button from '../../../shared/Button';
import { formSize } from '../../../styles/const';
import { checkValuesAreEmpty, checkValuesAreDefined } from './helpers';

const Form = ({ clearBtn, showText, importSubmitFunc }) => {
    const [firstName, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [text, setText] = useState('');
    const [fieldsErrors, setFieldsErrors] = useState({ firstName: '', lastName: '', age: '', country: '' });
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        checkFormIsValid();
    }, [firstName, lastname, age, country, fieldsErrors]);

    const clearHandle = () => {
        setFirstName('');
        setLastName('');
        setAge('');
        setCountry('');
        setText('');
        setFieldsErrors({ firstName: '', lastName: '', age: '', country: '' });
    };

    const sumbitHandle = () => {
        if (!formIsValid) return;
        setText(`This is ${firstName} ${lastname} - ${age} years old from ${country}!`);
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
            case 'country':
                value.match(/^([A-Za-z ]{2,})$/)
                    ? null
                    : (currentErrors[fieldName] = `${fieldName} is requred and should be valid.`);
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
        const notEmptyFields = checkValuesAreDefined(firstName, lastname, age, country);
        setFormIsValid(validValue && notEmptyFields);
    };

    return (
        <>
            <StyledForm width={`${formSize}px`}>
                <Row gutter='5px' justifyContent='space-between' style={{ width: '100%' }}>
                    <Col xs={5} gutter='0px'>
                        <Input
                            type='text'
                            id='firstName'
                            label='First name'
                            placeholder='Enter your first name here'
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                                validateField('firstName', e.target.value);
                            }}
                        />
                        {fieldsErrors.firstName ?? <div>{fieldsErrors.firstName}</div>}
                    </Col>
                    <Col xs={5} gutter='0px'>
                        <Input
                            type='text'
                            id='lastName'
                            label='Last name'
                            placeholder='Enter your last name here'
                            value={lastname}
                            onChange={(e) => {
                                e.persist();
                                setLastName(e.target.value);
                                validateField('lastName', e.target.value);
                            }}
                        />
                        {fieldsErrors.lastName ?? <div>{fieldsErrors.lastName}</div>}
                    </Col>
                    <Col xs={5} gutter='0px'>
                        <Input
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
                        {fieldsErrors.age ?? <div>{fieldsErrors.age}</div>}
                    </Col>
                    <Col xs={5} gutter='0px'>
                        <Input
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
                        {fieldsErrors.country ?? <div>{fieldsErrors.country}</div>}
                    </Col>
                </Row>

                <Row gutter='0px' justifyContent='space-between'>
                    {clearBtn ? (
                        <Col xs={4} gutter='0px'>
                            <Button active={true} text='Clear' type='button' handleClick={clearHandle} />
                        </Col>
                    ) : null}
                    <Col xs={4} gutter='0px'>
                        <Button
                            active={formIsValid}
                            text='Sumbit'
                            type='button'
                            handleClick={importSubmitFunc || sumbitHandle}
                        />
                    </Col>
                </Row>
            </StyledForm>

            {text && showText ? (
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
