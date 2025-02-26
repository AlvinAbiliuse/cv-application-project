import { useState } from "react";
import { Personal } from "./Personal.jsx";
import { baseState, example } from "./baseData.js";
import "../styles/index.css";

import "../styles/leftStyles.css";
/*
import {Education} from "./Education.jsx";
import {Experience} from "./Experience.jsx";
import {FullCV} from "./FullCV.jsx";
*/

function Education({ state }) {
	let cards = state.education.cards;
	return cards.map((i, index) => {
		return (
			<div key={index} className="card">
				<h2>Education: {i.name}</h2>
				<p>Degree: {i.degree}</p>
			</div>
		);
	});
}

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
				<div className="personalDisplay">
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
				<div className="educationDisplay">
					<Education state={state} />
				</div>
			</div>
		</>
	);
}

export default App;
