//REACT
import { useState, useEffect } from 'react';
//STYLES
import style from './style.module.scss';
//MAIN COMPONENTS
import ModalArea from 'components/modal-area';
import MainButton from 'components/main-button';
import IconButton from 'components/icon-button';
//ICON COMPONENTS
import * as Icon from 'components/icons';

export default function FixedButton() {
  //STATE
  const [showAddPinModal, showAddPinModalSet] = useState(false);
  const [showGetAppModal, showGetAppModalSet] = useState(false);

  useEffect(() => {}, []);
  return (
    <>
      {showGetAppModal && (
        <div className={style.getAppModalContainer}>
          <div className={style.getAppModal}>w</div>
          <div
            className={style.getAppModalArea}
            onClick={() => showGetAppModalSet(!showGetAppModal)}
          >
            {' '}
          </div>
        </div>
      )}

      <div className={style.addPinButtons}>
        <IconButton
          focused
          hoverable
          className={style.pinButtons}
          onClick={() => showAddPinModalSet(!showAddPinModal)}
        >
          <Icon.PlusIcon />

          {/* MODAL AREA*/}
          {showAddPinModal && (
            <ModalArea className={style.showAddPinModal}>
              <span className={style.addPinMessageTextArea}>
                <MainButton
                  onClick={() => showGetAppModalSet(!showGetAppModal)}
                  className={style.getApp}
                >
                  <Icon.MainLogo className={style.getAppMainLogo} />
                  <span>About the App</span>
                </MainButton>
              </span>
              <MainButton href='/new-pin' className={style.addButton}>
                <Icon.PlusIcon />
                <span className={style.createNewPinText}>Create new pin</span>
              </MainButton>
            </ModalArea>
          )}
        </IconButton>
      </div>
    </>
  );
}
