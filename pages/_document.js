import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <div id="cursor-root">
            <Main />
            <NextScript />
            <div id="modal-root"></div>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
