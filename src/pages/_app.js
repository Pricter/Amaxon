import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from "../app/store"
import { SessionProvider, useSession } from 'next-auth/react'

export default function App({ Component, pageProps: pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}
