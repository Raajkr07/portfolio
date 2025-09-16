import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './styles/App.css';
import App from './App';
import './assets/myImages/UseAnimateSVG';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root container missing in index.html');
}
