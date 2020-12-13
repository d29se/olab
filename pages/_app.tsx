import Head from "next/head";
// Styles
import "../styles/globals.scss";
import styles from "./_app.module.scss"
// Components
import NavBar from "../components/NavBar"
import Footer from "../components/Footer/Footer"
// Types
import type { AppProps } from "next/app"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container} >
      <Head>
        <title>O'Donoghue LAB</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      </Head>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MyApp;
