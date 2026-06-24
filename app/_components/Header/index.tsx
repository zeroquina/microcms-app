import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          width={348}
          height={133}
          alt="SAMPLE"
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}
