import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Info from "./Info/Info";
import Footer from "./Footer/Footer";
import MainLogo from "./MainLogo";

function Header() {
  return (
    <section id="main">
      <div className={styles.main}>
        <Info />
        <MainLogo />
        <Footer />
      </div>
    </section>
  );
}

export default Header;
