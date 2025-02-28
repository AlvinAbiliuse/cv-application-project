export function removeCard(remove, state, setState, current) {
	let temp = JSON.parse(JSON.stringify(state));
	temp[current]["cards"].splice(remove, 1);
	setState(JSON.parse(JSON.stringify(temp)));
}
