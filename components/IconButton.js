import React from 'react'
import Button from 'components/Button'
import styles from 'components/css/IconButton.module.scss'
import classMerge from 'classnames'
export default function IconButton({
  children,
  className,
  focused = true,
  hoverable = true,
}) {
  return (
    <Button
      className={classMerge(
        styles.iconButton,
        className,
        focused && styles.focused,
        hoverable && styles.hoverable
      )}
    >
      {children}
    </Button>
  )
}
