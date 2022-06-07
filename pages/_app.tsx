import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "@components/Header";
import Footer from "@components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
