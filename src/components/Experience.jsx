import { updateState } from "./updateState.js";
import { removeCard } from "./removeCard.js";

function Cards({ state, setState }) {
	let card = state["experience"]["cards"];
	return card.map((e, index) => {
		console.log(e);
		return (
			<div key={e.id} className="card">
				<div>
					<div>
						<label htmlFor={"name-" + index}>Company: </label>
						<input
							onChange={(e) => updateState(e, state, setState, "experience")}
							type="text"
							id={"name-" + index}
							value={e.name}
						/>
					</div>
					<div>
						<label htmlFor={"duration-" + index}>Duration: </label>
						<input
							onChange={(e) => updateState(e, state, setState, "experience")}
							type="text"
							id={"duration-" + index}
							value={e.duration}
						/>
					</div>
					<div>
						<label htmlFor={"position-" + index}>Position: </label>
						<input
							onChange={(e) => updateState(e, state, setState, "experience")}
							type="text"
							id={"position-" + index}
							value={e.position}
						/>
					</div>
				</div>
				<button
					onClick={() => removeCard(index, state, setState, "experience")}
					className="remove"
				>
					Remove
				</button>
			</div>
		);
	});
}

export function Experience({ state, setState }) {
	return (
		<div className="card">
			<Cards state={state} setState={setState} />
			<button>Add Item</button>
		</div>
	);
}
