import { useState, useEffect } from 'react';
import IconButton from 'components/IconButton';
import PlusIcon from 'components/icons/Plus';
import InfoIcon from 'components/icons/Info';
import styles from 'components/css/AddPinButtons.module.scss';
import ModalArea from 'components/ModalArea';
import MainLogo from 'components/icons/MainLogo';
import MainButton from 'components/MainButton';
export default function FixedButton() {
  const [showAddPinModal, showAddPinModalSet] = useState(false);
  const [showGetAppModal, showGetAppModalSet] = useState(false);

  useEffect(() => {}, []);
  return (
    <>
      {showGetAppModal && (
        <div className={styles.getAppModalContainer}>
          <div className={styles.getAppModal}>w</div>
          <div
            className={styles.getAppModalArea}
            onClick={() => showGetAppModalSet(!showGetAppModal)}
          >
            {' '}
          </div>
        </div>
      )}

      <div className={styles.addPinButtons}>
        <IconButton
          focused
          hoverable
          className={styles.pinButtons}
          onClick={() => showAddPinModalSet(!showAddPinModal)}
        >
          <PlusIcon />

          {/* MODAL AREA*/}
          {showAddPinModal && (
            <ModalArea className={styles.showAddPinModal}>
              <span className={styles.addPinMessageTextArea}>
                <MainButton
                  onClick={() => showGetAppModalSet(!showGetAppModal)}
                  className={styles.getApp}
                >
                  <MainLogo className={styles.getAppMainLogo} />
                  <span>About the App</span>
                </MainButton>
              </span>
              <MainButton href='/new-pin' className={styles.addButton}>
                <PlusIcon />
                <span className={styles.createNewPinText}>Create new pin</span>
              </MainButton>
            </ModalArea>
          )}
        </IconButton>
      </div>
    </>
  );
}
