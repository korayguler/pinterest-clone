import React from 'react'
import Button from 'components/Button'
import styles from 'components/css/MainButton.module.scss'
import classMerge from 'classnames'
export default function MainButton({ children, selected = false }) {
  return (
    <Button
      className={classMerge(styles.mainButton, selected && styles.selected)}
    >
      {children}
    </Button>
  )
}
