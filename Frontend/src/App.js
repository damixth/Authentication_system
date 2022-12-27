import React, { useState } from 'react';
import { Login } from "./Login";
import { Register } from "./Register"
import  Profile  from "./Profile"
import './App.css';
import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";

function App() {
	const [currentForm, setCurrentForm] = useState('login');

	const toggleForm = (formName) => {
		setCurrentForm(formName);
	}
	
	return (
		<div className="App">
			
			
			{
				currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
				
			}
			{/* <>
				<Router>

					<switch>
						
						<Route path="/profile" component={Profile} />
						
					</switch>

				</Router>
			</> */}
		</div>
	);
}

export default App;
