import React, { Component } from "react";
import axios from "axios";

class Pokemons extends Component {
	constructor() {
		super();
		this.state = {
			pokemons: null,
			loading: true
		};
	}

	componentDidMount() {
		axios
			.get("https://pokeapi.co/api/v2/pokemon/")
			.then(result => {
				console.log(result);
				this.setState({ pokemons: result.data.results, loading: false });
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		let pokemons;
		if (this.state.pokemons) {
			pokemons = this.state.pokemons.map((pokemon, i) => {
				return <p key={i}>{pokemon.name}</p>;
			});
		}

		return (
			<div>
				{this.state.loading && <p>Loading</p>}
				{/* {this.state.pokemons && (
					<img src={this.state.pokemons.sprites.front_default} alt="" />
                )} */}

				{pokemons}
			</div>
		);
	}
}

export default Pokemons;
