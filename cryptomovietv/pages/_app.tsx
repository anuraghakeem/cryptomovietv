import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
// import 'tw-elements';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
