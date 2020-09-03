import React from 'react'
import styles from 'components/css/Header.module.scss'
import SearchBar from 'components/SearchBar'
import ClassNames from 'classnames'
import Button from 'components/Button'
import MainButton from 'components/MainButton'
import IconButton from 'components/IconButton'
import Logo from 'components/icons/MainLogo'
import NotificationIcon from 'components/icons/Notification'
import MessageIcon from 'components/icons/Message'
import DownIcon from 'components/icons/Down'
export default function Header({ children }) {
  return (
    <header className={styles.header}>
      <div className={styles.navigationContainer}>
        <IconButton>
          <Logo width={24} height={24} color={'rgb(var(--c-p))'} />
        </IconButton>
        <MainButton>Ana Sayfa</MainButton>
        <MainButton>Takip Edilen</MainButton>
      </div>
      <SearchBar />
      <div className={styles.profileButtonsContainer}>
        <IconButton>
          <NotificationIcon width={24} height={24} />
        </IconButton>
        <IconButton>
          <MessageIcon width={24} height={24} />
        </IconButton>

        <IconButton>
          <DownIcon width={24} height={24} />
        </IconButton>

        <IconButton>
          <DownIcon width={12} height={12} />
        </IconButton>
      </div>
    </header>
  )
}
