import { Provider } from 'react-redux'
import Layout from '../Components/layout/Layout'
import '../styles/globals.css'
import store from '../Components/redux/store'


function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  )
}

export default MyApp
