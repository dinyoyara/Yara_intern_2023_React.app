import React from 'react';
import { Row, Col } from 'react-flexa';

import StyledRow from './styles.css';

const TableRow = ({ fn, ln, age, ...props }) => {
    return (
        <StyledRow {...props}>
            <td style={{ textAlign: 'center' }}>{fn}</td>
            <td style={{ textAlign: 'center' }}>{ln}</td>
            <td style={{ textAlign: 'center' }}>{age}</td>
        </StyledRow>
    );
};

export default TableRow;
