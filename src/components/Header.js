import React from 'react';

const Header = (props)=> {
    return (
        <div>
            {/* W Poniższy sposób pobierzemy propsa*/}
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};
Header.defaultProps = {
    title: 'Indecison'
};

export default Header;