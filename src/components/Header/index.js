import React from 'react';
import { Row } from 'react-flexa';

import logo from '../../assets/images/logo.jpg';
import StyledBanner from './Banner/styledBanner';
import StyledImage from '../../shared/Image/styledImage';

const Header = () => {
    return (
        <Row style={{ margin: '0' }}>
            <StyledImage src={logo} alt='Logo' width='5rem' height='5rem' />
            <StyledBanner />
        </Row>
    );
};

export default Header;
