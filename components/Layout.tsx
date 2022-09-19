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
            <h2 className={styles.subtitle}>
              A blog by the Starschema Data Visualization Team
            </h2>
            <h1>Grumpy Armadillo</h1>
          </div>
          <nav className={styles.navbar}>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Our Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className={styles.main}>{props.children}</main>
      </div>
    </>
  );
}
