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
		personal: { show: true, name: null, email: "", tel: "" },
		education: { show: true, "": { duration: "", degree: "" } },
		experience: { show: true, "": { duration: "", position: "" } },
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
