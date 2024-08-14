import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodoProvider, InputProvider, FilteredProvider, StatusProvider } from './components/contexts/';

ReactDOM.createRoot(document.getElementById('root')).render(
    <TodoProvider>
    <InputProvider>
    <FilteredProvider>
    <StatusProvider>
        <App />
    </StatusProvider>
    </FilteredProvider>
    </InputProvider>
    </TodoProvider>
)
