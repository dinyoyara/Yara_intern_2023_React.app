import React from 'react';

import StyledButton from './styledButton';

const Button = ({ text, type, handleClick }) => {
    return (
        <StyledButton type={type} onClick={handleClick}>
            {text}
        </StyledButton>
    );
};

export default Button;
