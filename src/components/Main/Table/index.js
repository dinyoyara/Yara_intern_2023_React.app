import React, { useState } from 'react';
import { Row } from 'react-flexa';

import Form from '../Form';
import People from './constants';
import TableRow from './TableRow';
import StyledTable from './styles.css';
import Button from '../../../shared/Button';
import { tableRowWidth } from '../../../styles/const';

const Table = () => {
    const [showFrom, setShowForm] = useState(false);
    const [clearForm, setClearForm] = useState(false);
    const [tableData, setTableData] = useState(People);

    const addItemHadler = (person) => {
        setTableData((prev) => [...prev, person]);
        setShowForm(false);
        setClearForm(true);
    };

    return (
        <>
            <Row
                gutter='0px'
                justifyContent='center'
                style={{ width: `${tableRowWidth}px`, marginLeft: '80px', marginTop: '30px' }}
            >
                <h2>Table name</h2>
            </Row>
            <StyledTable width={`${tableRowWidth}px`}>
                <thead style={{ marginBottom: '10px' }}>
                    <TableRow
                        fn='First name'
                        ln='Last name'
                        age='Age'
                        country='Country'
                        color='white'
                        bgc='grey'
                        height='50px'
                    />
                </thead>
                <tbody>
                    {tableData.map((p, i) => (
                        <TableRow
                            key={i + p.lastName + p.age}
                            fn={p.firstName}
                            ln={p.lastName}
                            age={p.age}
                            country={p.country}
                            color='gray'
                            bgc='mintcream'
                            height='35px'
                        />
                    ))}
                </tbody>
            </StyledTable>

            <Row gutter='0px' style={{ width: '130px', marginLeft: '80px' }}>
                <Button
                    type='button'
                    active={true}
                    handleClick={() => setShowForm((prev) => !prev)}
                    text='Add a new person'
                />
            </Row>
            {showFrom ? (
                <Form
                    formName={null}
                    showClearBtn={false}
                    showText={false}
                    importSubmitFunc={addItemHadler}
                    clearForm={clearForm}
                />
            ) : null}
        </>
    );
};

export default Table;
