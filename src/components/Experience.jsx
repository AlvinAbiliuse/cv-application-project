function Cards({ state }) {
	let card = state["experience"]["cards"];
	return card.map((e, index) => {
		console.log(e);
		return (
			<div key={e["id"]} className="card">
				<label htmlFor={"name-" + index}>Company: </label>
				<input type="text" id={"name-" + index} value={e.name} />
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
