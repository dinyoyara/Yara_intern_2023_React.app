import React from 'react';
import { Row, Col } from 'react-flexa';
import { Switch, Route } from 'react-router-dom';

import Form from './Form';
import Table from './Table';
import Sidebar from './Sidebar';
import { logoSize } from '../../styles/const';

const Main = () => {
    return (
        <Row gutter='0px'>
            <Col xs={`${logoSize}px`} gutter='0px'>
                <Sidebar height={`calc(100vh - ${logoSize}px)`} />
            </Col>
            <Col xs={`calc(100vw - ${logoSize}px)`} gutter='0px'>
                <Switch>
                    <Route exact path='/form' component={Form} />
                    <Route exact path='/table' component={Table} />
                </Switch>
            </Col>
        </Row>
    );
};

export default Main;
