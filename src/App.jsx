import { useState } from "react";
import { Personal } from "./Personal.jsx";
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
			<div className="left">Hello</div>
			<div className="right">Bye</div>
			<Personal state={state} setState={setState} />
		</>
	);
}

export default App;
