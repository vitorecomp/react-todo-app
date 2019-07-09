import React from 'react'
import {
	NavLink
} from 'react-router-dom'

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/" activeClassName='is-active' exact={true}>Home</NavLink>
		<NavLink to="/portifolio" activeClassName='is-active' >Portifolios</NavLink>
		<NavLink to="/contact" activeClassName='is-active'>Contact</NavLink>
	</header>
)

export default Header;