import React from 'react'
import IconButton from 'components/IconButton'
import PlusIcon from 'components/icons/Plus'
import InfoIcon from 'components/icons/Info'
import styles from 'components/css/AddPinButtons.module.scss'
export default function FixedButton() {
  return (
    <div className={styles.addPinButtons}>
      <IconButton focused hoverable className={styles.pinButtons}>
        <PlusIcon />
      </IconButton>
      <IconButton focused hoverable className={styles.pinButtons}>
        <InfoIcon />
      </IconButton>
    </div>
  )
}
