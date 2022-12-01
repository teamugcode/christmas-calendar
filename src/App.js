import "./App.css";
import Calendar from "./components/Calendar";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<main className="main">
				<div className="calendar">
					<Calendar />
				</div>
			</main>
		</div>
	);
}

export default App;
