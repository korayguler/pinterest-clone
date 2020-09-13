import { useState, useEffect } from 'react'
import IconButton from 'components/IconButton'
import PlusIcon from 'components/icons/Plus'
import InfoIcon from 'components/icons/Info'
import styles from 'components/css/AddPinButtons.module.scss'
import ModalArea from 'components/ModalArea'
import MainLogo from 'components/icons/MainLogo'
import MainButton from 'components/MainButton'
export default function FixedButton() {
  const [showAddPinModal, showAddPinModalSet] = useState(true)
  useEffect(() => {
    showAddPinModalSet(!showAddPinModal)
  }, [])
  return (
    <div className={styles.addPinButtons}>
      <IconButton
        focused
        hoverable
        className={styles.pinButtons}
        onClick={() => showAddPinModalSet(!showAddPinModal)}
      >
        <PlusIcon />
        {showAddPinModal && (
          <ModalArea className={styles.showAddPinModal}>
            <span className={styles.addPinMessageTextArea}>
              <MainButton className={styles.getApp}>
                <MainLogo />
                <span> Get pinterest app</span>
              </MainButton>
            </span>
            <MainButton href='/new-pin' className={styles.addButton}>
              <PlusIcon /> <span>Create new pin</span>
            </MainButton>
          </ModalArea>
        )}
      </IconButton>
      <IconButton focused hoverable className={styles.pinButtons}>
        <InfoIcon />
      </IconButton>
    </div>
  )
}
