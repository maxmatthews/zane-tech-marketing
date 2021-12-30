import logo from "./ZaneTechLLC.png";
import "./App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SlackTunesInstalled from "./SlackTunesInstalled";

const Home = () => {
	return (
		<div>
			<img src={logo} className={"logo"} alt={"Zane Tech LLC Mentoring"} />
			<p>Custom software consulting, app development, and mentoring.</p>
			<p>Currently in development: SlackTunes</p>
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path={"/slacktunes"}>
						<Route path={"installed"} element={<SlackTunesInstalled />} />
					</Route>
					<Route path="/">
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
