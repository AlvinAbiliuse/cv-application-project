export function removeCard(remove, state, setState, current) {
	let temp = JSON.parse(JSON.stringify(state));
	let toRemove = state[current].filter((e) => {
		e.id === remove;
	});
	console.log(temp);
	console.log(remove);
}
