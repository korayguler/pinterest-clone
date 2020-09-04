import React from 'react'
import Header from 'components/Header'
import styles from 'components/css/Layout.module.scss'
import AddPinButtons from 'components/AddPinButtons'
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className={styles.main}>{children}</main>
      <AddPinButtons />
      <footer>footer</footer>
    </div>
  )
}
