import React from 'react';
import { Col, Row } from 'react-flexa';

import Input from './Input';
import Button from '../../../shared/Button';
import StyledForm from './styledForm';
import { inputSize } from '../../../styles/const';

const Form = () => {
    return (
        <StyledForm>
            <Input
                type='text'
                id='firstName'
                label='First name'
                placeholder='Enter your first name here'
                width={`${inputSize}px`}
            />
            <Input
                type='text'
                id='LastName'
                label='Last name'
                placeholder='Enter your last name here'
                width={`${inputSize}px`}
            />

            <Input type='text' id='Age' label='Age' placeholder='Enter your age here' width={`${inputSize}px`} />

            <Row gutter='0px' justifyContent='space-between'>
                <Col xs={4} gutter='0px'>
                    <Button text='Clear' />
                </Col>
                <Col xs={4} gutter='0px'>
                    <Button text='Sumbit' />
                </Col>
            </Row>
        </StyledForm>
    );
};

export default Form;
