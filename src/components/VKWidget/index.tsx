import Script from 'next/script';
import styles from './styles.module.css';

export const VKWidget = () => (
    <div id="vk_groups" className={styles.root}>
        <Script src={'https://vk.com/js/api/openapi.js?169'}  onReady={() => {
            globalThis.VK.Widgets.Group("vk_groups", {
              mode: 3,
              color3: 'F7A136'
          }, vk_group_id)
        }} />
    </div>
  )

