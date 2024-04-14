import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { worker } from './mocks/browser';
worker.start();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
);
