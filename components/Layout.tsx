import Link from "next/link";
import Head from "next/head";

import styles from "./Layout.module.scss";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Starschema DataViz Blog</title>
        <meta
          name="description"
          content="A blog set up for the best Enterprise Dataviz Team"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h2>A blog by the Starschema Data Visualization Team</h2>
            <h1>Grumpy Armadillo</h1>
          </div>
          <nav className={styles.navbar}>
            <ul>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/blog">
                <a>Our Blog</a>
              </Link>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </ul>
          </nav>
        </header>
        <main className={styles.main}>{props.children}</main>
      </div>
    </>
  );
}
