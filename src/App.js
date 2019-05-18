import React, { Component } from "react";
import User from "./components/User";
import Nav from "./components/Nav";
import Timer from "./components/Timer";
import Pokemons from "./components/Pokemons";
import { Route, Switch } from "react-router-dom";

class App extends Component {
	constructor() {
		super();
		this.state = {
			username: ""
		};
	}

	liftUserUp = username => {
		this.setState({
			username: username
		});
	};

	render() {
		return (
			<div>
				<Nav />
				<h1>Hello, {this.state.username}</h1>

				<Switch>
					<Route
						path="/user"
						render={() => <User liftUserUp={this.liftUserUp} />}
					/>
					<Route
						path="/timer"
						render={() => <Timer username={this.state.username} />}
					/>
					<Route path="/pokemons" component={Pokemons} />
				</Switch>
			</div>
		);
	}
}

export default App;
