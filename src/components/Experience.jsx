function Cards({ state }) {
	let card = state["experience"]["cards"];
	return card.map((e) => {
		console.log(e);
		return <p>Hello</p>;
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
