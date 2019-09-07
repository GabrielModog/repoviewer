import React, { useState, useEffect} from 'react';

/*
function createID(){
	return Number(Math.floor([Math.floor(Math.random() * 10),
			  Math.floor(Math.random() * 10),
			  Math.floor(Math.random() * 10),
			  Math.floor(Math.random() * 10)].join("")/10));
}
*/

export default function App(){

	/*	
	const [repositories, setRepositories] = React.useState([
		{id: 1, name: "repo-1"},
		{id: 2, name: "repo-2"},
		{id: 3, name: "repo-3"}
	]);
	*/
	
	const [repositories, setRepositories] =  useState([]);
	
	/*
	function handleAddRepo(){
		setRepositories([...repositories, 
							{id: createID(),
							name: "repo-" + createID()}]);
	}
	*/
	
	useEffect( async () => {
		
		const response = await fetch('https://api.github.com/users/torvalds/repos');
		const data = await response.json();
		
		setRepositories(data);
		
  }, []);
  
  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Did you have ${filtered.length} fave on you desk?`;  
  }, [repositories]);

  function handleFave(id){
    const newRepo = repositories.map(repo =>{
      return repo.id === id ? { ...repo, favorite: !repo.favorite} : repo;
    });

    setRepositories(newRepo);
  }
	
	return(
		<>
		<ul>

			{repositories.map(repo => (
				<li key = { repo.id }>
          { repo.name }
          { repo.favorite && <span> (Fave)</span>}
          <button onClick = {() => handleFave(repo.id)}>Fave</button>
				</li>
      ))}
      
		</ul>
		</>
	);
}