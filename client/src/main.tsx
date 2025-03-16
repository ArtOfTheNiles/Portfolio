import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import App from './App.tsx'
import '@syles/reset.css'
import '@/styles/index.css'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </ApolloProvider>
)
