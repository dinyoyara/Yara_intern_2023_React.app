import React from 'react';
import { Row, Col } from 'react-flexa';

import StyledSide from './Side/styledSide';
import { logoSize } from '../../styles/const';

const Main = () => {
    return (
        <Row gutter='0px'>
            <Col xs={`${logoSize}px`} gutter='0px'>
                <StyledSide />
            </Col>
            <Col xs={`calc(100vw - ${logoSize}px)`} gutter='0px'>
                <div>Main</div>
            </Col>
        </Row>
    );
};

export default Main;
