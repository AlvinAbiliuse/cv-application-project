function Education({ state, check }) {
	let cards = state.education.cards;
	if (check) {
		return cards.map((i, index) => {
			return (
				<div key={index} className="card">
					<h2>Education: {i.name}</h2>
					<p>Degree: {i.degree}</p>
				</div>
			);
		});
	} else {
		return cards.map((i, index) => {
			return (
				<div key={index} className="card">
					<h2>Company: {i.name}</h2>
					<p>Duration: {i.duration}</p>
					<p>Position: {i.position}</p>
				</div>
			);
		});
	}
}

export function FullCV({ state }) {
	return (
		<>
			<div className="personalDisplay">
				<p>
					Name: <span>{state.personal.name}</span>
				</p>
				<p>
					Email: <span>{state.personal.email}</span>
				</p>
				<p>
					Phone Number: <span>{state.personal.tel}</span>
				</p>
			</div>
			<div className="educationDisplay">
				<Education state={state} check={true} />
			</div>
		</>
	);
}
