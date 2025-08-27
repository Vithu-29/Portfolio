import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
	return (
		<ThemeProvider>
			<div className="text-foreground min-h-screen relative">
				<Navbar/>
				<Routes>
					<Route path="/" element={<Home />}></Route>
				</Routes>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
