import "../sass/main.scss";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#eef0f5"
        height={2}
        startPosition={0.3}
        stopDelayMs={200}
        showOnShallow={true}
      />
      <ThemeProvider
        enableSystem={true}
        disableTransitionOnChange
        attribute="class"
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
