import { useState } from "react";
import First from "./First.jsx";

function App() {
	let [state, setState] = useState({
		personal: {},
		education: {},
		experience: {},
	});

	return (
		<>
			<div className="left">Hello</div>
			<div className="right">Bye</div>
		</>
	);
}

export default App;
