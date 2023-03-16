import React from 'react';

import StyledInput from './styles.css';

const Input = ({ type, id, placeholder, label, width, value, onChange, height }) => {
    return (
        <StyledInput width={width} height={height}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{ height: '45%' }}
            />
        </StyledInput>
    );
};

export default Input;
