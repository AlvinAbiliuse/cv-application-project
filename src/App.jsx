import { useState } from "react";

function App() {
	let [state, setState] = useState({
		personal: {},
		education: {},
		experience: {},
	});

	return (
		<>
			<div class="left">Hello</div>

			<div class="right">Bye</div>
		</>
	);
}

export default App;
