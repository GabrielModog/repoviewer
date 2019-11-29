import React, { useState, useEffect} from 'react';
import axios from 'axios';

import "./App.css";

export default  function App() {
	const [data, setData] = useState([]);
	const [user, setUser] = useState("torvalds");
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!value) return;
		setUser(value);
		setValue("");
	}

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`https://api.github.com/users/${user}/repos`);
			setData(result.data);
		};

		fetchData();
	});

	return (
		<div className="App">
			<h3>Github API, Axios and Hooks</h3>
			<ul>
				<h1>{user}</h1>
				{data.map(item => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
			<br />
			<div className="form">
				<input type="text"placeholder="Github Username..." value={value} onChange={e => setValue(e.target.value)} />
				<button onClick={handleSubmit}>Submit</button>	
			</div>
		</div>
	);

}