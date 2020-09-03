import Header from 'components/Header'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <Header>Header</Header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}
