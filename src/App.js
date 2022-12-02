import "./App.css";
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Snowfall from "react-snowfall";

function App() {
	return (
		<div className="App">
			<Header />
			<main className="main">
				<div className="calendar">
					<Snowfall snowflakeCount={100} />
					<Calendar />
				</div>
			</main>
		</div>
	);
}

export default App;
