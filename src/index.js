import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://native-ewe-21.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers:{
    'content-type':'application/json',
    'x-hasura-admin-secret':'qS4OdF25H1ngtb9fFZOLBKqJGgdlMVTxFBI4gvM6TSov3DfL5VjUZKfFkYBBB2S4'
  }
});

ReactDOM.render(
  
  <React.StrictMode>
     <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
