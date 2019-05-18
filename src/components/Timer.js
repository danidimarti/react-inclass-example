import React, { Component } from "react";

class Timer extends Component {
	constructor() {
		super();
		this.state = {
			counter: 100,
			intervalId: null
		};
		console.log("hello, I'm constructing");
	}
	componentDidMount() {
		const intervalId = setInterval(() => {
			this.setState({ counter: this.state.counter - 1 });
		}, 1000);

		this.setState({ intervalId: intervalId });

		console.log("hello, I'm mounting");
	}

	// componentDidUpdate(prevProps, prevState) {
	// 	console.log(
	// 		"prevProps:",
	// 		prevProps,
	// 		"currentProps : ",
	// 		this.props.username
	// 	);
	// }

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	render() {
		console.log("rendering");
		return (
			<div>
				<h1>Timer = {this.state.counter}</h1>
				<p> {this.props.username}</p>
			</div>
		);
	}
}

export default Timer;
