import GlobalStyle from '@/styles/GlobalStyles';
import Theme from '@/styles/Theme';
import Layout from '@/components/layouts';
import { useRecoilValue } from 'recoil';
import { modalWithText } from '@/stores/modal';
import Portal from '@/components/common/Portal';
import Modal from '@/components/common/Modal';
import { AnimatePresence } from 'framer-motion';
import Router from '@/Router';
import { loadingState } from './stores/loading';
import Loading from './components/common/Loading';
import DarkBackground from './components/common/DarkBackground';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import queryClientDefaultOptions from './constants/queryClientDefaultOptions';

export default function App() {
  const queryClient = new QueryClient(queryClientDefaultOptions);
  const modalWithTextValue = useRecoilValue(modalWithText);
  const loadingValue = useRecoilValue(loadingState);

  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <GlobalStyle />
        <Layout>
          <Router />
        </Layout>
        <Portal>
          <AnimatePresence>
            {modalWithTextValue.type === 'ALERT' && <Modal.Alert />}
            {modalWithTextValue.type === 'CONFIRM' && <Modal.Confirm />}
            {loadingValue.isLoading && (
              <DarkBackground>
                <Loading mode="fixed" />
              </DarkBackground>
            )}
          </AnimatePresence>
        </Portal>
      </Theme>
    </QueryClientProvider>
  );
}
