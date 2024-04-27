import GlobalStyle from '@/styles/GlobalStyles';
import Theme from '@/styles/Theme';
import Layout from '@/components/layouts';
import { useRecoilValue } from 'recoil';
import { modalWithText } from '@/stores/modal';
import Portal from '@/components/common/Portal';
import Modal from '@/components/common/Modal';
import { AnimatePresence } from 'framer-motion';
import Router from '@/Router';
import React from 'react';
import environment from './environment';
import { loadingState } from './stores/loading';
import Loading from './components/common/Loading';
import DarkBackground from './components/common/DarkBackground';

export default function App() {
  const modalWithTextValue = useRecoilValue(modalWithText);
  const loadingValue = useRecoilValue(loadingState);
  React.useEffect(() => {
    console.log(environment.serverUrl);
  }, []);

  return (
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
  );
}
