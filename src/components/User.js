import React, { Component } from "react";

class User extends Component {
	getUserData = e => {
		this.props.liftUserUp(e.target.value);
	};

	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						placeholder="User name"
						onChange={e => this.getUserData(e)}
					/>
				</form>
			</div>
		);
	}
}

export default User;
