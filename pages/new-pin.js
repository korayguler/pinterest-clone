import Layout from 'components/Layout'
import CircleImage from 'components/CircleImage'
import styles from 'pages/css/new-pin.module.scss'
const newPin = () => {
  return (
    <Layout>
      <div className={styles.newPinArea}>
        <div className={styles.leftSide}>l</div>
        <div className={styles.rightSide}>r</div>
      </div>
    </Layout>
  )
}

export default newPin
