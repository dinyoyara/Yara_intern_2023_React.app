import React from 'react';
import { Row, Col } from 'react-flexa';

const ErrorPage = () => {
    return (
        <Row gutter='0px' justifyContent='center' style={{ paddingTop: '80px' }}>
            <Col style={{ fontSize: '32px', color: 'red' }}>NOT FOUND</Col>
        </Row>
    );
};

export default ErrorPage;
