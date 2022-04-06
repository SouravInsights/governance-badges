import { ChakraProvider, Box, CSSReset } from '@chakra-ui/react'
import { Provider } from 'wagmi'
import NavBar from '../components/NavBar'
import { Global, css } from '@emotion/react';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider>
      <Global
        styles={css`
          html {
            background: #000000;
            font-family: "Inter, sans-serif";
          }
        `}
      />
      <Box bg='black' >
        {/* <NavBar /> */}
      </Box>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
