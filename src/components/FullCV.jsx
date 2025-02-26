export default function FullCV({ state }) {
	return (
		<>
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
		</>
	);
}
