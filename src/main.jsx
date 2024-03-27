import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import state from './redux/state';
import { addPost } from './redux/state';
import './reset.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App state={state} addPost={addPost}/>
	</React.StrictMode>,
)
