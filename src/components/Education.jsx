import { updateState } from "./updateState.js";
import { removeCard } from "./removeCard.js";
function addCard(state, setState) {
	let temp = JSON.parse(JSON.stringify(state));
	temp.education.cards.push({ id: crypto.randomUUID(), name: "", degree: "" });
	setState(temp);
}

function Cards({ state, setState }) {
	let card = JSON.parse(JSON.stringify(state.education.cards));
	return card.map((e, index) => {
		return (
			<div key={e.id} className="card">
				<div>
					<div>
						<label htmlFor={"name-" + index}>Education:</label>
						<input
							onChange={(e) => updateState(e, state, setState, "education")}
							type="text"
							value={e.name}
							id={"name-" + index}
						/>
					</div>
					<div>
						<label htmlFor={"degree-" + index}>Degree:</label>
						<input
							onChange={(e) => updateState(e, state, setState, "education")}
							type="text"
							value={e.degree}
							id={"degree-" + index}
						/>
					</div>
				</div>
				<button
					onClick={() => removeCard(index, state, setState, "education")}
					className="remove"
				>
					Remove
				</button>
			</div>
		);
	});
}

export function Education({ state, setState }) {
	return (
		<div className="card">
			<Cards state={state} setState={setState} />
			<button onClick={() => addCard(state, setState)} type="button">
				Add Item
			</button>
		</div>
	);
}
