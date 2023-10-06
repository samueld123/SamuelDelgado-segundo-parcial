import './App.css';
import MealPreviw from './components/mealPreview';

import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Detail from './pages/detail';
import Home from './pages/home';
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<Navbar>
				<SearchBox />
			</Navbar>
			
			<Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/meals/:id" element={<Detail />} />
      </Routes>
		</div>
	);
}

export default App;
