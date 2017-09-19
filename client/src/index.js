import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import '../dist/css/style.css';

filepicker.setKey(process.env.FILESTACK);
ReactDOM.render(Routes, document.getElementById('content'));
