import Layout from 'components/Layout'
import CircleImage from 'components/CircleImage'
import styles from 'pages/css/new-pin.module.scss'
import Button from 'components/Button'
import UploadIcon from 'components/icons/Upload'
import MainButton from 'components/MainButton'
const newPin = () => {
  return (
    <Layout>
      <div className={styles.newPinArea}>
        <div className={styles.leftSide}>
          <div className={styles.imageUploadArea}>
            <div className={styles.mediaEmptyView}>
              <div className={styles.mediaEmtyViewInside}>
                <span>
                  <UploadIcon />
                  <p>Yüklemek için sürükleyip bırakın veya tıklayın</p>
                </span>

                <p>
                  Öneri: 20 MB'den küçük yüksek kaliteli .jpg dosyaları
                  kullanın.
                </p>
              </div>
              <input
                type='file'
                accept='image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp'
              />
            </div>
          </div>
          <MainButton className={styles.saveButton}>Siteden Kaydet</MainButton>
        </div>
        <div className={styles.rightSide}>r</div>
      </div>
      <div className={styles.container}></div>
    </Layout>
  )
}

export default newPin
