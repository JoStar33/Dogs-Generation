import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
async function enableMocking() {
  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({ onUnhandledRequest: 'bypass', waitUntilReady: true }).catch(console.warn);
}

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>,
  ),
);
