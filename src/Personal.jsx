function DropBtn({ current, s, setS}) {
	if (s[current]["show"]) {
		console.log(s);
		let c = s;
		c[current]["show"] =  false;
		setS(c);
		console.log(s);
		return (<button>-</button>)
	} else {
		console.log(s);
		let c = s;
		c[current]["show"] = true;
		setS(c);
		console.log(s);
		return (<button>+</button>)
	}
}


export default function Personal([state, setState]) {
	return (
		<div className="card">
		<div className="cardHeader">
			<h2>Personal Details</h2>
			<DropBtn current={personal} s={state}, setS={setState} />

