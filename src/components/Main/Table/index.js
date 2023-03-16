import React, { useState } from 'react';

import StyledTable from './styles.css';
import TableRow from './TableRow';
import { tableRowSize } from '../../../styles/const';

const people = [
    { firstName: 'Marya', lastName: 'Nedeva', age: 32 },
    { firstName: 'Stoyan', lastName: 'Dimov', age: 20 },
    { firstName: 'Viktor', lastName: 'Mitev', age: 50 }
];

const Table = () => {
    const [tableData, setTableData] = useState(people);

    return (
        <>
            <StyledTable width={`${tableRowSize}px`}>
                <thead style={{ marginBottom: '10px' }}>
                    <TableRow fn='First name' ln='Last name' age='Age' color='white' bgc='grey' height='40px' />
                </thead>
                <tbody>
                    {tableData.map((p, i) => (
                        <TableRow
                            key={i + p.lastName + p.age}
                            fn={p.firstName}
                            ln={p.lastName}
                            age={p.age}
                            color='gray'
                            bgc='mintcream'
                            height='25px'
                        />
                    ))}
                </tbody>
            </StyledTable>

            <details>
                <summary style={{ marginLeft: '50px' }}>form</summary>
            </details>
        </>
    );
};

export default Table;
