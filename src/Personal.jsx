function Change({ state, setState }) {
	console.log(state);
	if (state["personal"]["show"]) {
		console.log(state);
		let c = state;
		c["personal"]["show"] = false;
		setState(c);
		console.log(state);
		return <button>+</button>;
	} else {
		console.log(state);
		let c = state;
		c["personal"]["show"] = true;
		setState(c);
		console.log(state);
		return <button>-</button>;
	}
}

export function Personal({ state, setState }) {
	return (
		<div className="card">
			<div className="cardHeader">
				<h2>Personal Details</h2>
				<button> + </button>
			</div>
			<div className="cardContents">
				<div>
					<label htmlFor="name">Full Name</label>
					<input type="text" id="name"></input>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" id="email"></input>
				</div>
				<div>
					<label htmlFor="number">Phone Number</label>
					<input type="tel" id="name"></input>
				</div>
			</div>
		</div>
	);
}
