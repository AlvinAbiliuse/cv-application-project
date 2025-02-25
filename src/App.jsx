import { useState } from "react";
import First from "./First.jsx";

function App() {
	/*
	let [state, setState] = useState({
		personal: {},
		education: {},
		experience: {},
	});
	*/
	const [s, setS] = useState(0);

	return (
		<>
			<div class="left">Hello</div>
			<First s={s} setS={setS} />
			<div class="right">Bye</div>
		</>
	);
}

export default App;
