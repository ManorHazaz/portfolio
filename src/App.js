import './App.css';
import { ContactMe } from './Components/ContactMe';
import { Intro } from './Components/Intro';
import { Projects } from './Components/Projects';

function App()
{
	return (
		<div className="App">
			
			<Intro />
			<Projects />
			<ContactMe />

		</div>
	);
}

export default App;