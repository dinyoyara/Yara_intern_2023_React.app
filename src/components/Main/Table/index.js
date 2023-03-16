import React, { useState } from 'react';

import Form from '../Form';
import TableRow from './TableRow';
import StyledTable from './styles.css';
import { tableRowSize } from '../../../styles/const';

const people = [
    { firstName: 'Marya', lastName: 'Nedeva', age: 32, country: 'Bulgaria' },
    { firstName: 'Stoyan', lastName: 'Dimov', age: 20, country: 'Bulgaria' },
    { firstName: 'Viktor', lastName: 'Mitev', age: 50, country: 'Bulgaria' }
];

const Table = () => {
    const [tableData, setTableData] = useState(people);

    const addItemHadle = () => {
        document.getElementsByTagName('details')[0].removeAttribute('open');

        const person = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            age: document.getElementById('age').value,
            country: document.getElementById('country').value
        };

        setTableData((prev) => [...prev, person]);

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('age').value = '';
        document.getElementById('country').value = '';
    };

    return (
        <>
            <StyledTable width={`${tableRowSize}px`}>
                <thead style={{ marginBottom: '10px' }}>
                    <TableRow
                        fn='First name'
                        ln='Last name'
                        age='Age'
                        country='Country'
                        color='white'
                        bgc='grey'
                        height='40px'
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
                            height='25px'
                        />
                    ))}
                </tbody>
            </StyledTable>

            <details>
                <summary style={{ marginLeft: '50px', color: 'gray', cursor: 'pointer' }}>Add a new item</summary>
                <Form clearBtn={false} showText={false} importSubmitFunc={addItemHadle} />
            </details>
        </>
    );
};

export default Table;
