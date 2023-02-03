import Layout from '@/Layout/Layout'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export default function App({ Component, pageProps:{session,...pageProps} }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
      <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </SessionProvider>
      </Provider>
    </ChakraProvider>
  )
}
