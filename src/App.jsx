import { useState } from "react";
/*
import {Personal} from "./Personal.jsx";
import {Education} from "./Education.jsx";
import {Experience} from "./Experience.jsx";
import {FullCV} from "./FullCV.jsx";
*/

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
