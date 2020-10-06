//REACT
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
//STYLES
import style from './style.module.scss';
//MAIN COMPONENTS
import SearchBar from 'components/search-bar';
import Button from 'components/button';
import MainButton from 'components/main-button';
import CircleImage from 'components/circle-image';
import IconButton from 'components/icon-button';
import ModalArea from 'components/modal-area';
//ICONS
import * as Icon from 'components/icons';
export default function Header({ children }) {
  const router = useRouter();

  const [accountsOption, accountsOptionSet] = useState(false);
  const [notification, notificationSet] = useState(false);
  const [messages, messagesSet] = useState(false);

  const autoClose = () => {
    if (accountsOption) {
      notificationSet(false);
      messagesSet(false);
    }
    if (notification) {
      accountsOptionSet(false);
      messagesSet(false);
    }

    if (messages) {
      accountsOptionSet(false);
      notificationSet(false);
    }
  };

  const closeArea = () => {
    accountsOptionSet(false);
    notificationSet(false);
    messagesSet(false);
  };
  useEffect(() => {
    autoClose();
  }, []);
  return (
    <div>
      <header className={style.header}>
        <Head>
          <link rel='icon' type='image/png' sizes='32x32' href='favicon.png' />
        </Head>
        <div className={style.navigationContainer}>
          <IconButton href={'/'}>
            <Icon.MainLogo width={24} height={24} color={'rgb(var(--c-p))'} />
          </IconButton>
          <MainButton
            href={'/'}
            selected={router.pathname == '/' ? true : false}
          >
            Home
          </MainButton>
          <MainButton
            href={'/following'}
            selected={router.pathname == '/following' ? true : false}
          >
            Following
          </MainButton>
        </div>
        <SearchBar />
        <div className={style.profileButtonsContainer}>
          <IconButton
            className={style.notificationBtn}
            onClick={() => notificationSet(!notification)}
          >
            <Icon.Notification width={24} height={24} />

            {notification && (
              <div className={style.hideCloseArea} onClick={closeArea}>
                <ModalArea className={style.notification}>notifical</ModalArea>
              </div>
            )}
          </IconButton>
          <IconButton
            className={style.messagesBtn}
            onClick={() => messagesSet(!messages)}
          >
            <Icon.Message width={24} height={24} />
            {messages && (
              <div className={style.hideCloseArea} onClick={closeArea}>
                <ModalArea className={style.messages}>MESSAGES</ModalArea>
              </div>
            )}
          </IconButton>

          <IconButton href={'/profile'}>
            <CircleImage src='/image/profile.jpg' size={'24px'} />
          </IconButton>

          <IconButton
            className={style.accountsOptionBtn}
            className={style.miniButton}
            onClick={() => accountsOptionSet(!accountsOption)}
          >
            <Icon.Down width={12} height={12} />
            {accountsOption && (
              <div className={style.hideCloseArea} onClick={closeArea}>
                <ModalArea className={style.accountsOption}>modal</ModalArea>
              </div>
            )}
          </IconButton>
        </div>
      </header>
    </div>
  );
}
