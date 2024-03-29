import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/state';
import './reset.css';
import './index.css';

let rerenderEntireTree = (state) => {
	ReactDOM.createRoot(document.getElementById('root')).render(
		<React.StrictMode>
			<App 
				state={state} 
				dispatch={store.dispatch.bind(store)} 
				store={store}
			/>
		</React.StrictMode>,
	)
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);