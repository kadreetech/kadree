import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { GTM_ID, isEnglishPath } from '../lib/site'

export default class SiteDocument extends Document<{ language: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, language: isEnglishPath(ctx.pathname) ? 'en' : 'es' }
  }
  render() {
    return <Html lang={this.props.language}>
      <Head>
        <script id="google-tag-manager" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');` }} />
      </Head>
      <body>
        <noscript><iframe title="Google Tag Manager" src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /></noscript>
        <Main /><NextScript />
      </body>
    </Html>
  }
}
