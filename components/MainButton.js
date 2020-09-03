import React from 'react'
import Button from 'components/Button'
import styles from 'components/css/MainButton.module.scss'
export default function MainButton({ children }) {
  return <Button className={styles.mainButton}>{children}</Button>
}
