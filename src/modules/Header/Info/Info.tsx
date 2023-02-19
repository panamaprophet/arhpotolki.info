import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Burger from "../../../components/Burger";
import Menu from "../../../components/Menu";

function Info() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => setIsMenuOpen(true);
  const handleClose = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo__eco}></div>
      {!isMenuOpen && (
        <div className={styles.menu}>
          <span className={styles.header__phone}>+7 8182 47-67-24</span>
          <Burger onClick={handleOpen} />
        </div>
      )}
      {isMenuOpen && <Menu onClick={handleClose} />}
    </header>
  );
}

export default Info;
