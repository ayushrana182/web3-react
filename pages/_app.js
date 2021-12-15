import "../styles/globals.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import {Web3ReactProvider} from "@web3-react/core";
import Web3 from "web3"

function getLibrary(provider, connector) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
    </ChakraProvider>
  );
}

export default MyApp;
