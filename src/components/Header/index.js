import React from 'react';
import { Row, Col } from 'react-flexa';
import { useHistory } from 'react-router';

import Banner from './Banner';
import Image from '../../shared/Image';
import { logoSize } from '../../styles/const';
import logo from '../../assets/images/logo.jpg';

const Header = () => {
    const history = useHistory();

    return (
        <Row gutter='0px'>
            <Col xs={`${logoSize}px`} gutter='0px' style={{ height: '80px' }}>
                <Image
                    onClick={() => history.push('/')}
                    src={logo}
                    alt='Logo'
                    width={`${logoSize}px`}
                    height={`${logoSize}px`}
                />
            </Col>
            <Col xs={`calc(100vw - ${logoSize}px)`} gutter='0px'>
                <Banner height={`${logoSize}px`} />
            </Col>
        </Row>
    );
};

export default Header;
