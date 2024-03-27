import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './reset.css';
import './index.css';

let posts = [
	{id: 1, message: 'Hi, how are you', likesCount: 12},
	{id: 2, message: 'it,s my first post', likesCount: 10},
];

let dialogs = [
	{id: 1, name: 'Andrey'},
	{id: 2, name: 'Dimych'},
	{id: 3, name: 'Sveta'},
	{id: 4, name: 'Andrey'},
	{id: 5, name: 'Viktor'},
	{id: 6, name: 'Valera'}
];

let messages = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'How is your gadji'},
	{id: 3, message: 'Yo'},
	{id: 4, message: 'Yo'},
	{id: 5, message: 'Yo'}
];

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App posts={posts} dialogs={dialogs} messages={messages}/>
	</React.StrictMode>,
)
