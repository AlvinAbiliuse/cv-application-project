function Education({ state, check }) {
	if (check) {
		let cards = state.education.cards;
		return cards.map((i, index) => {
			return (
				<div key={index} className="innerCard card">
					<h2>Education: {i.name}</h2>
					<p>Degree: {i.degree}</p>
				</div>
			);
		});
	} else {
		let cards = state.experience.cards;
		return cards.map((i, index) => {
			return (
				<div key={index} className="innerCard card">
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
			<div className="experienceDisplay">
				<Education state={state} check={false} />
			</div>
		</>
	);
}
