import { useState } from "react";
import { Personal } from "./Personal.jsx";

import "../styles/leftStyles.css";
/*
import {Education} from "./Education.jsx";
import {Experience} from "./Experience.jsx";
import {FullCV} from "./FullCV.jsx";
*/

let baseState = {
	personal: { show: true },
	education: { show: true },
	experience: { show: true },
};

function App() {
	let [state, setState] = useState(baseState);
	console.log(state);

	return (
		<>
			<div className="left">
				<button
					className="btn reset"
					onClick={() => setState((s) => (s = baseState))}
				>
					Reset
				</button>
				<Personal state={state} setState={setState} />
			</div>
			<div className="right">
				<p>Name: {state.personal.name ?? ""}</p>
				<p>Email: {state.personal.email}</p>
				<p>Phone Number: {state.personal.tel}</p>
			</div>
		</>
	);
}

export default App;
