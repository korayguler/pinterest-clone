import React from 'react'
import styles from 'components/css/Button.module.scss'
import classMerge from 'classnames'

export default function Button({ children, className, ...props }) {
  return (
    <button className={classMerge(styles.btn, className)} {...props}>
      {children}
    </button>
  )
}
