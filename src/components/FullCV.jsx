function Education({ state }) {
	let cards = state.education.cards;
	return cards.map((i, index) => {
		return (
			<div key={index} className="card">
				<h2>Education: {i.name}</h2>
				<p>Degree: {i.degree}</p>
			</div>
		);
	});
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
				<Education state={state} />
			</div>
		</>
	);
}
