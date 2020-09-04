import React from 'react'
import styles from 'components/css/Header.module.scss'
import SearchBar from 'components/SearchBar'
import ClassNames from 'classnames'
import Button from 'components/Button'
import MainButton from 'components/MainButton'
import CircleImage from 'components/CircleImage'
import * as Icon from 'components/icons'
import IconButton from 'components/IconButton'
import { useRouter } from 'next/router'

export default function Header({ children }) {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.navigationContainer}>
        <IconButton href={'/'}>
          <Icon.MainLogo width={24} height={24} color={'rgb(var(--c-p))'} />
        </IconButton>
        <MainButton href={'/'} selected={router.pathname == '/' ? true : false}>
          Ana Sayfa
        </MainButton>
        <MainButton
          href={'/following'}
          selected={router.pathname == '/following' ? true : false}
        >
          Takip Ediliyor
        </MainButton>
      </div>
      <SearchBar />
      <div className={styles.profileButtonsContainer}>
        <IconButton>
          <Icon.Notification width={24} height={24} />
        </IconButton>
        <IconButton>
          <Icon.Message width={24} height={24} />
        </IconButton>

        <IconButton>
          <CircleImage src='/image/profile.jpg' />
        </IconButton>

        <IconButton className={styles.miniButton}>
          <Icon.Down width={12} height={12} />
        </IconButton>
      </div>
    </header>
  )
}
