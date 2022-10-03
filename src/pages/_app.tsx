import '../styles/global.css';

import type { AppProps } from 'next/app';

import AuthenticationProvider from '@/modules/authentication/contexts/authentication-provider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthenticationProvider>
    <Component {...pageProps} />
  </AuthenticationProvider>
);

export default MyApp;
