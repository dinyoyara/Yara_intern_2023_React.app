import React from 'react';

import StyledNavElement from './styles.css';

const NavElement = ({ children, ...styleProps }) => {
    return <StyledNavElement {...styleProps}>{children}</StyledNavElement>;
};

export default NavElement;
