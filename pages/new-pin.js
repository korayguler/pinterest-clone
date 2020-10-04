//REACT
import { useState, useEffect } from 'react';

//STYLES
import style from 'pages/css/new-pin.module.scss';
//MAIN COMPONENTS
import Layout from 'components/layout';
import MainButton from 'components/main-button';
import StyledTextArea from 'components/styled-text-area';
import MiniProfile from 'components/mini-profile';

import UploadIcon from 'components/icons/Upload';
const newPin = () => {
  return (
    <Layout>
      <div className={style.newPinArea}>
        <div className={style.leftSide}>
          <div className={style.imageUploadArea}>
            <div className={style.mediaEmptyView}>
              <div className={style.mediaEmtyViewInside}>
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
          <MainButton className={style.saveButton}>Save Pin</MainButton>
        </div>
        <div className={style.rightSide}>
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
              className={style.miniProfile}
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
            className={style.pinLink}
          />
        </div>
      </div>
      <div className={style.container}></div>
    </Layout>
  );
};

export default newPin;
