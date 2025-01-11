import { createRoot } from 'react-dom/client';
import './index.css';
import '@/common/utils/localization';
import { App } from '@/App';
import { IconContext } from 'react-icons';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
  <IconContext.Provider value={{ color: 'black' }}>
    <App />
  </IconContext.Provider>,
);
