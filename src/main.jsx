import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import state, { subscribe } from './redux/state';
import { addPost, updateNewPostText } from './redux/state';
import './reset.css';
import './index.css';

let rerenderEntireTree = (state) => {
	ReactDOM.createRoot(document.getElementById('root')).render(
		<React.StrictMode>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
		</React.StrictMode>,
	)
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);