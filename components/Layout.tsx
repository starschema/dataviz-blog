import Link from "next/link";
import Head from "next/head";

export default function Layout(props) {
  return (
    <div
      style={{
        margin: "3rem",
      }}
    >
      <Head>
        <title>Starschema DataViz Blog</title>
        <meta
          name="description"
          content="A blog set up for the best Enterprise Dataviz Team"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="header-content">
          <h2>A blog by the Starschema Data Visualization Team</h2>
          <h1>Grumpy Armadillo</h1>
        </div>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Our Blog</a>
          </Link>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </nav>
      </header>
      <main>{props.children}</main>
    </div>
  );
}
