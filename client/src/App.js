import React from 'react';
import BookList from './components/BookList'
import ApolloClient from 'apollo-boost';
import { ApolloProvider} from '@apollo/react-hooks';
import AddBook from './components/AddBook'



const client = new ApolloClient({
  uri : 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client ={client}>
    <div className="App">
    <BookList/>
    <AddBook/>
    </div>
    </ApolloProvider>
  );
}

export default App;
