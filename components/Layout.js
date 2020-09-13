import Header from 'components/Header'
import Content from 'components/Content'
import styles from 'components/css/Layout.module.scss'
import AddPinButtons from 'components/AddPinButtons'
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Content>{children}</Content>
      <AddPinButtons />
      <footer>footer</footer>
    </div>
  )
}
