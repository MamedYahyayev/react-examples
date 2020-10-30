import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Toys from "../components/Toys";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.content}>
        <img
          src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg"
          alt=""
        />
      </div>

      <div className={styles.toys}>
        <Toys size="3" />
      </div>

      <Footer />
    </div>
  );
}
