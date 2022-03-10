import Document, { Html, Head, Main, NexScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <body>
            <Main />
            <NexScript />
            <div id="notifications"></div>
          </body>
        </Head>
      </Html>
    );
  }
}
