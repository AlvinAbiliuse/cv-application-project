export default function First({ s, setS }) {
	function click() {
		setS((a) => (a = a + 1));
		console.log(s);
	}
	return <button onClick={click}>Click Me: {s}</button>;
}
