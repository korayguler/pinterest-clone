import React, { useState } from 'react'
import styles from 'components/css/Pin.module.scss'

export default function Pin({ href, image }) {
  const [show, showPinContent] = useState(false)

  return (
    <div
      className={styles.pin}
      onMouseEnter={() => showPinContent(true)}
      onmouseleave={() => showPinContent(false)}
    >
      <img src={image} />
    </div>
  )
}
