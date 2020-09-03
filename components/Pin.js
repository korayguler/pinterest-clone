import React from 'react'
import styles from 'components/css/Pin.module.scss'
export default function Pin({ title, desc, href, image }) {
  return (
    <div className={styles.pin}>
      <img src={image} />
    </div>
  )
}
