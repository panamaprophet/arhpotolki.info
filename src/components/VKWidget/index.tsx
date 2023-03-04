import Script from 'next/script';
import styles from './styles.module.css';

export const VKWidget = () => {
  const url = 'https://vk.com/js/api/openapi.js?169';
  
  const onReady = () => globalThis.VK.Widgets.Group("vk_groups", {
          mode: 3,
          color3: 'F7A136'
      }, 53659209)

  return (
      <div id="vk_groups" className={styles.root}>
          <Script src={url}  onReady={onReady} />
      </div>
  )
}

