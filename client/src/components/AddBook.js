import React, {useState} from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

	const GET_AUTHOR = gql`
{
		authors{
			name 
			id
		}
}
`;

function AddBook() {
  const { loading, error, data } = useQuery(GET_AUTHOR);

  const [name, setName] =useState('')
  const [genre, setGenre] =useState('')
  const [authorID, setAuthorID] =useState('')

  const submitForm=(e)=>{
  	e.preventDefault();
  	console.log(name)
  }



  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
  	<form id="add-book" onSubmit={submitForm}>
  	<div className="field">
  	<label>Book</label>
  	<input type="text" value={name} onChange ={(e) => setName(e.target.value)}/>
  	</div>
  	<div className="field">
  	<label>Genre</label>
  	<input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}/>
  	</div>
  	<div className="field">
  	<label>Author</label>
    <select name="author" onChange={(e) => setAuthorID(e.target.value)}>
      {data.authors.map(author => (
        <option key={author.id} value={author.id}>
         {author.name}
        </option>
      ))}
    </select>
    </div>
    <button>+</button>
    </form>
  );
}



export default AddBook