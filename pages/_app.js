import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import withReduxStore from '../lib/redux/withReduxStore'
import withApollo from '../lib/apollo/withApollo'


class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore, apolloClient} = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(withReduxStore(MyApp))