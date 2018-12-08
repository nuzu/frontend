
import Document, { Head, Main, NextScript } from 'next/document'
import Layout from '../components/layout'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
            
        </Head>
        <body>
        <Layout>
            <Main />
        </Layout>
          <NextScript />
        </body>
      </html>
    )
  }
}