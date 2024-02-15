import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VideoProvider } from './helpers/VideoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <VideoProvider>
        <App />
    </VideoProvider>
);

