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
		personal: { show: true },
		education: { show: true },
		experience: { show: true },
	});

	return (
		<>
			<div className="left">
				<Personal state={state} setState={setState} />
			</div>
			<div className="right">Bye</div>
		</>
	);
}

export default App;
