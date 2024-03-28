const environment = {
  environment: import.meta.env.REACT_PUBLIC_ENVIRONMENT,
  private: import.meta.env.REACT_PUBLIC_PRIVATE === 'true',
};

export default environment;
