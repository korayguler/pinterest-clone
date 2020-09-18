import Layout from 'components/Layout'
import CircleImage from 'components/CircleImage'
import styles from 'pages/css/new-pin.module.scss'
import Button from 'components/Button'
import UploadIcon from 'components/icons/Upload'
import MainButton from 'components/MainButton'
import TextareaAutosize from 'react-textarea-autosize'

import { useState, useEffect } from 'react'
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
        <div className={styles.rightSide}>
          <div className={styles.pinTitle}>
            <TextareaAutosize
              className={styles.pinTitleInput}
              placeholder='Başlığınızı ekleyin'
            />
          </div>
          <span className={styles.pinTitleInputCounter}>
            Akışlarda genellikle ilk 40 karakter görünür
          </span>

          <div className={styles.profile}>
            <CircleImage src='image/profile.jpg' size={32} />
            <span>Koray Güler</span>
          </div>

          <div className={styles.pinDesc}>
            <TextareaAutosize
              className={styles.pinDescInput}
              placeholder='pininizin ne hakkında olduğunu herkese söyleyin'
            />
          </div>
          <span className={styles.pinTitleInputCounter}>
            Akışlarda genellikle ilk 40 karakter görünür
          </span>
        </div>
      </div>
      <div className={styles.container}></div>
    </Layout>
  )
}

export default newPin
