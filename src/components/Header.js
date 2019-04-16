import {Link, NavLink} from "react-router-dom";
import React from "react";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <br/>
        {/*// Tu damy NavLinka i skorzystamy z jego możliiwości (activeClassName) */}
        <NavLink activeClassName="is-active" to='/help' exact={true}>Help</NavLink>
        <br/>
        {/*// Tu damy NavLinka, który w tym przypadku zadziałą tak samo jak Link*/}
        <NavLink to='/create'>Dashboard</NavLink>
    </header>
);

export default Header;