import React from 'react'
import styles from 'components/css/CircleImage.module.scss'
export default function CircleImage({ src, size }) {
  return (
    <img className={styles.circleImage} src={src} style={{ width: size }} />
  )
}
