import React from 'react';
import { useHistory } from 'react-router';

import StyledSidebar from './styles.css';
import NavElement from '../../../shared/NavElement';
import { navElementSize } from '../../../styles/const';

const Sidebar = ({ height }) => {
    const history = useHistory();

    return (
        <StyledSidebar height={height}>
            <NavElement
                onClick={() => history.push('/table')}
                width={`${navElementSize}px`}
                height={`${navElementSize}px`}
                children='Table'
            />
            <NavElement
                onClick={() => history.push('/form')}
                width={`${navElementSize}px`}
                height={`${navElementSize}px`}
                children='Form'
            />
        </StyledSidebar>
    );
};

export default Sidebar;
