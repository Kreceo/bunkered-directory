import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render = () => (
    <Html>
      <Head>
        <link href="https://fonts.cdnfonts.com/css/proxima-nova-2" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;