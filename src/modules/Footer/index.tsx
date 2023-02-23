import styles from './styles.module.css';

function Footer() {
  return (
    <section id="footer">
      <div className={`${styles.contacts} layout`}>
        <div className={styles.address}>
          <p className={styles.address__title}>АрхПотолки</p>{' '}
          <p className="address__place">
            город Архангельск, ул. Беломорской флотилии 2-3-33
          </p>{' '}
          <p className="address__phone">+7 8182 47-67-24</p>
        </div>{' '}
        <p>
          <a target="_blank" href="http://vk.com/arhpotolki" rel="noreferrer">
            vk.com/arhpotolki
          </a>
        </p>{' '}
        <p>
          <a target="_blank" href="mailto:hello@arhpotolki.info" rel="noreferrer">
            hello@arhpotolki.info
          </a>
        </p>{' '}
        <div id="vk_groups" className="contacts__vk-widget"></div>{' '}
        <div
          data-yasharel10n="ru"
          data-yasharetype="small"
          data-yasharequickservices="vkontakte,facebook,twitter,odnoklassniki,moimir"
          data-yasharetheme="counter"
          className="yashare-auto-init"
        ></div>{' '}
        <p className={styles.contacts__copyright}>
          Copyright © АрхПотолки, 2014 - 2023 |{' '}
          <a href="/terms.html">Зашита персональной информации</a>
        </p>
      </div>
    </section>
  );
}

export default Footer;
