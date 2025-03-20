import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>MehrCAR</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://MehrCAR.ir" target="_blank" rel="noreferrer">
          Mehrab
        </a>{" "}
        Next.js courses | MehrCAR Project &copy;
      </footer>
    </>
  );
}

export default Layout;
