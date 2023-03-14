import React from 'react';

const NavElement = ({ className, children, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    );
};

export default NavElement;
