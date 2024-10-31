import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Greeting from './Greeting.jsx';
import {Food} from './Food.jsx';
import {TestTitle} from './TestTitle.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestTitle />
  </StrictMode>,
);