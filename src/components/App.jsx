import { useState } from "react";
import { Personal } from "./Personal.jsx";
import { baseState, example } from "./baseData.js";
import { FullCV } from "./FullCV.jsx";
import { Education } from "./Education.jsx";
import { Experience } from "./Experience.jsx";
import "../styles/index.css";

import "../styles/leftStyles.css";
/*
 */

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
				<Education state={state} setState={setState} />
				<Experience state={state} setState={setState} />
			</div>
			<div className="right">
				<FullCV state={state} />
			</div>
		</>
	);
}

export default App;
