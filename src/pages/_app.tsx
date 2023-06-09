import type { AppProps } from 'next/app';
import '@/globals.css';
import Layout from '@/layouts/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
