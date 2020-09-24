import Layout from 'components/Layout';
import styles from 'pages/css/new-pin.module.scss';
import UploadIcon from 'components/icons/Upload';
import MainButton from 'components/MainButton';
import StyledTextArea from 'components/StyledTextArea';
import MiniProfile from 'components/MiniProfile';
import { useState, useEffect } from 'react';
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
                  <p>Drag and drop or click to upload</p>
                </span>

                <p>Suggestion: Use 20 MB of small high-quality .jpg image</p>
              </div>
              <input
                type='file'
                accept='image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp'
              />
            </div>
          </div>
          <MainButton className={styles.saveButton}>Save Pin</MainButton>
        </div>
        <div className={styles.rightSide}>
          <div>
            <StyledTextArea
              largeSize
              inputCheckText={
                'Usually the first 40 characters appear in streams'
              }
              inputCounter={50}
              placeholder='Add your title'
            />
            <MiniProfile
              userImage={'image/profile.jpg'}
              bold
              userName='koray'
              imageSize={32}
              className={styles.miniProfile}
            />
            <StyledTextArea
              smallSize
              inputCheckText={
                'Usually, when users click on your Pin, they see the first 50 characters'
              }
              inputCounter={500}
              placeholder='Tell everyone what your pin is about'
            />
          </div>
          <StyledTextArea
            placeholder='Add a destination link'
            className={styles.pinLink}
          />
        </div>
      </div>
      <div className={styles.container}></div>
    </Layout>
  );
};

export default newPin;
