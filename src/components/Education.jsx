function UpdateState({ state, setState, e }) {}

function Cards({ state, setState }) {
	let card = JSON.parse(JSON.stringify(state.education.cards));
	console.log(card);
	return card.map((e, index) => {
		<div>
			<label htmlfor={"name" + index}>Education:</label>
			<input type="text" key={e.id} value={e.name} />
		</div>;
	});
}

export default function Education({ state, setState }) {
	return (
		<>
			<div className="card">
				<Cards state={state} setState={setState} />
				<button>Add Item</button>
			</div>
		</>
	);
}
