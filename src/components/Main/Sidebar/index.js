import React from 'react';
import { useHistory } from 'react-router';

import StyledNavElement from '../../../shared/Nav.element/styledNavElement';
import { navElementSize } from '../../../styles/const';

const Sidebar = ({ className, children }) => {
    const history = useHistory();
    return (
        <div className={className}>
            <StyledNavElement
                onClick={() => history.push('/table')}
                width={`${navElementSize}px`}
                height={`${navElementSize}px`}
                children='Table'
            />
            <StyledNavElement
                onClick={() => history.push('/form')}
                width={`${navElementSize}px`}
                height={`${navElementSize}px`}
                children='Form'
            />
            {children}
        </div>
    );
};

export default Sidebar;
