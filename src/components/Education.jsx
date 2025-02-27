function UpdateState({ state, setState, e }) {}

function addCard(state, setState) {
	let temp = JSON.parse(JSON.stringify(state));
	temp.education.cards.push({ id: crypto.randomUUID(), name: "", degree: "" });
	setState(temp);
}

function Cards({ state, setState }) {
	let card = JSON.parse(JSON.stringify(state.education.cards));
	console.log(card);
	return card.map((e, index) => {
		return (
			<div className="card">
				<label htmlfor={"name" + index}>Education:</label>
				<input type="text" key={e.id} value={e.name} />
			</div>
		);
	});
}

export function Education({ state, setState }) {
	return (
		<>
			<div className="card">
				<Cards state={state} setState={setState} />
				<button onClick={() => addCard(state, setState)} type="button">
					Add Item
				</button>
			</div>
		</>
	);
}
