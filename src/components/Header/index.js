import React from 'react';
import { Row } from 'react-flexa';

import logo from '../../assets/images/logo.jpg';
import StyledBanner from './Banner/styledBanner';
import StyledImg from '../../shared/Image/styledImage';

const Header = () => {
    return (
        <Row style={{ margin: '0' }}>
            <StyledImg src={logo} alt='Logo' width='5rem' height='5rem' />
            <StyledBanner />
        </Row>
    );
};

export default Header;
