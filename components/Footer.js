import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src="/images/turtle.jpeg" alt="Turtle" width={175} height={175} /> {/* Adjust width and height as needed */}
    </footer>
  );
}
