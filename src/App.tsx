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

export default function App() {
  const modalWithTextValue = useRecoilValue(modalWithText);
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
        </AnimatePresence>
      </Portal>
    </Theme>
  );
}
