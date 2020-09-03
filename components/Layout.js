import React from 'react'
import Header from 'components/Header'
import styles from 'components/css/Layout.module.scss'
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>

      <footer>footer</footer>
    </div>
  )
}
