import React, { Component } from "react";

import { Link } from "react-router-dom";

class Nav extends Component {
	state = {};
	render() {
		return (
			<ul>
				<li>
					<Link to="/user">Take me to the user</Link>
				</li>
				<li>
					<Link to="/timer">Take me to the timer</Link>
					<Link to="/pokemons">Take me to the pokemons</Link>
				</li>
			</ul>
		);
	}
}

export default Nav;
