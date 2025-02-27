function updateState(e, state, setState) {
	console.log(e.target.value);
	console.log(e.target);
	let tempState = JSON.parse(JSON.stringify(state));
	console.log(tempState);
	let tempData = e.target.id.split("-");
	console.log(tempData);
	tempState["education"]["cards"][tempData[1]][tempData[0]] = e.target.value;
	setState(tempState);
}

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
			<div key={e.id} className="card">
				<div>
					<div>
						<label htmlFor={"name-" + index}>Education:</label>
						<input
							onChange={(e) => updateState(e, state, setState)}
							type="text"
							value={e.name}
							id={"name-" + index}
						/>
					</div>
					<div>
						<label htmlFor={"degree-" + index}>Degree:</label>
						<input
							onChange={(e) => updateState(e, state, setState)}
							type="text"
							value={e.degree}
							id={"degree-" + index}
						/>
					</div>
				</div>
				<button className="remove">Remove</button>
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
