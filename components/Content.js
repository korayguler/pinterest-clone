import styles from 'components/css/Content.module.scss'
function Content({ children }) {
  return <main className={styles.main}>{children}</main>
}
export default Content
