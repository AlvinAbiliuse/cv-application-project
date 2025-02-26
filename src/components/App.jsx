import { useState } from "react";
import { Personal } from "./Personal.jsx";

import "../styles/leftStyles.css";
/*
import {Education} from "./Education.jsx";
import {Experience} from "./Experience.jsx";
import {FullCV} from "./FullCV.jsx";
*/

function App() {
	let [state, setState] = useState({
		personal: { show: true, name: "", email: "", tel: "" },
		education: { show: true },
		experience: { show: true },
	});

	return (
		<>
			<div className="left">
				<Personal state={state} setState={setState} />
			</div>
			<div className="right">
				<p>Name: {state.personal.name}</p>
				<p>Email: {state.personal.email}</p>
				<p>Phone Number: {state.personal.tel}</p>
			</div>
		</>
	);
}

export default App;
