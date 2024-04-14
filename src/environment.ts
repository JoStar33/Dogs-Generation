const environment = {
  environment: import.meta.env.VITE_REACT_ENVIRONMENT,
  private: import.meta.env.VITE_REACT_PUBLIC_PRIVATE === 'true',
  serverUrl: import.meta.env.VITE_REACT_SERVER_URL!,
  cryptoKey: import.meta.env.VITE_REACT_CRYPTO_KEY!,
};

export default environment;
