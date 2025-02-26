import { useState } from "react";
import { Personal } from "./Personal.jsx";

import "../styles/leftStyles.css";
/*
import {Education} from "./Education.jsx";
import {Experience} from "./Experience.jsx";
import {FullCV} from "./FullCV.jsx";
*/

const baseState = {
	personal: { show: true, name: "", email: "", tel: "" },
	education: { show: true, cards: [] },
	experience: { show: true, cards: [] },
};

const example = {
	personal: {
		show: true,
		name: "Jarod Tarot",
		email: "jarodthetarotreader@tarot.com",
		tel: "900-500-100",
	},
	education: { show: true },
	experience: { show: true },
};

function App() {
	let [state, setState] = useState(JSON.parse(JSON.stringify(example)));

	return (
		<>
			<div className="left">
				<button
					className="btn reset-btn"
					onClick={() => {
						setState(JSON.parse(JSON.stringify(baseState)));
					}}
				>
					Reset
				</button>

				<button
					className="btn example-btn"
					onClick={() => setState(JSON.parse(JSON.stringify(example)))}
				>
					Load Example
				</button>
				<Personal state={state} setState={setState} />
			</div>
			<div className="right">
				<p>
					Name: <span>{state.personal.name}</span>
				</p>
				<p>
					Email: <span>{state.personal.email}</span>
				</p>
				<p>
					Phone Number: <span>{state.personal.tel}</span>
				</p>
			</div>
		</>
	);
}

export default App;
