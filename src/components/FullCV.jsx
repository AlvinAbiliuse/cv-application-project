function Education({ state, check }) {
	if (check) {
		let cards = state.education.cards;
		return cards.map((i, index) => {
			return (
				<div key={index} className="innerCard card">
					<h2>
						Education:<span className={"cardHeader"}> {i.name}</span>
					</h2>
					<p>
						Degree: <span className={"cardItem"}>{i.degree}</span>
					</p>
				</div>
			);
		});
	} else {
		let cards = state.experience.cards;
		return cards.map((i, index) => {
			return (
				<div key={index} className="innerCard card">
					<h2>
						Company: <span className={"cardHeader"}>{i.name}</span>
					</h2>
					<p>
						Duration: <span className={"cardItem"}>{i.duration}</span>
					</p>
					<p>
						Position: <span className={"cardItem"}>{i.position}</span>
					</p>
				</div>
			);
		});
	}
}

export function FullCV({ state }) {
	return (
		<>
			<div className="personalDisplay">
				<h2>
					Name: <span className={"cardHeader"}>{state.personal.name}</span>
				</h2>
				<p>
					Email: <span className={"cardItem"}>{state.personal.email}</span>
				</p>
				<p>
					Phone Number: <span className={"cardItem"}>{state.personal.tel}</span>
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
