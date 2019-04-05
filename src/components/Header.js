import React from 'react';

const Header = (props)=> {
    return (
        <div className="header">
            {/* W Poniższy sposób pobierzemy propsa*/}
            <h1 className="header__title">{props.title}</h1>
            <h2 className="header__subtitle">{props.subtitle}</h2>
        </div>
    );
};
Header.defaultProps = {
    title: 'Indecison'
};

export default Header;