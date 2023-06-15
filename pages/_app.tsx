/* eslint-disable react/jsx-props-no-spreading */
import '../public/globals.css';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        {/* Site here */}
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp