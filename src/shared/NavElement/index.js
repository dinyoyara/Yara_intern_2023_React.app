import React from 'react';

import StyledNavElement from './styledNavElement';

const NavElement = ({ children, ...styleProps }) => {
    return <StyledNavElement {...styleProps}>{children}</StyledNavElement>;
};

export default NavElement;
