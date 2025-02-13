import "./App.scss";
import DropDown from "./components/DropDown/DropDown";

function App() {
	const animals = ["gorilla", "elephant", "lion", "zebra", "hyena"];

	return (
		<>
			<h1>🫖 double-teapot 🫖</h1>
			<p>a component showcase demo for students of React</p>
			<DropDown
				id="exampleDropDown"
				label="The text in front"
				options={animals}
			/>
		</>
	);
}

export default App;
