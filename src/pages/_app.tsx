import '../styles/global.css';

import type { AppProps } from 'next/app';

import UnuthenticationGuard from '@/modules/authentication/components/UnauthenticationGuard';
import AuthenticationProvider from '@/modules/authentication/contexts/authentication-provider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthenticationProvider>
    <UnuthenticationGuard>
      <Component {...pageProps} />
    </UnuthenticationGuard>
  </AuthenticationProvider>
);

export default MyApp;
