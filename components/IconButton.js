import React from 'react'
import Button from 'components/Button'
import styles from 'components/css/IconButton.module.scss'
import classMerge from 'classnames'
export default function IconButton({ children }) {
  return <Button className={styles.iconButton}>{children}</Button>
}
