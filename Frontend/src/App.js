import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import  { Login }  from "./pages/Login";
import  { Register } from "./pages/Register"
import   Profile from "./pages/Profile"
import './App.css';


function App() {

	const { user } = useAuthContext()
	
	return (
		<div className="App">		
			
			<BrowserRouter>
				
				<Routes>

					<Route
					path="/"
					element={user ? <Profile /> : <Navigate to ="/login" />}
					/>

					<Route
					path="/login"
					element={!user ? <Login /> :  <Navigate to ="/" />}
					/>

					<Route
					path="/register"
					element={!user ? <Register /> :  <Navigate to ="/" />}
					/>

				</Routes>
				
			</BrowserRouter>
		</div>
	);
}

export default App;
