import GlobalStyles from "~/styles/GlobalStyles";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
};

export default MyApp;
