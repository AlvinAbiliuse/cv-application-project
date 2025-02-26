export function Personal({ state, setState }) {
	function valueChange(e) {
		let parentNode = e.target.parentNode.parentNode.classList[0];
		let target = e.target.id;
		let targetValue = e.target.value;

		let tempState = { ...state };
		tempState[parentNode][target] = targetValue;
		console.log(tempState);
		setState(tempState);
	}

	return (
		<div className="card">
			<div className="cardHeader">
				<h2>Personal Details</h2>
				<button> + </button>
			</div>
			<div className="personal cardContents">
				<div>
					<label htmlFor="name">Full Name</label>
					<input
						onChange={valueChange}
						type="text"
						id="name"
						value={state["personal"]["name"]}
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						onChange={valueChange}
						type="email"
						id="email"
						value={state["personal"]["email"]}
					/>
				</div>
				<div>
					<label htmlFor="number">Phone Number</label>
					<input
						onChange={valueChange}
						type="tel"
						id="tel"
						value={state["personal"]["tel"]}
					/>
				</div>
			</div>
		</div>
	);
}
