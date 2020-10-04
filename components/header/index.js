//REACT
import { useRouter } from 'next/router';
import Head from 'next/head';
//STYLES
import style from './style.module.scss';
//MAIN COMPONENTS
import SearchBar from 'components/search-bar';
import Button from 'components/button';
import MainButton from 'components/main-button';
import CircleImage from 'components/circle-image';
import IconButton from 'components/icon-button';
//HELPERS
import ClassNames from 'classnames';
//ICONS
import * as Icon from 'components/icons';
export default function Header({ children }) {
  const router = useRouter();

  return (
    <header className={style.header}>
      <Head>
        <link rel='icon' type='image/png' sizes='32x32' href='favicon.png' />
      </Head>
      <div className={style.navigationContainer}>
        <IconButton href={'/'}>
          <Icon.MainLogo width={24} height={24} color={'rgb(var(--c-p))'} />
        </IconButton>
        <MainButton href={'/'} selected={router.pathname == '/' ? true : false}>
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
        <IconButton>
          <Icon.Notification width={24} height={24} />
        </IconButton>
        <IconButton>
          <Icon.Message width={24} height={24} />
        </IconButton>

        <IconButton href={'/profile'}>
          <CircleImage src='/image/profile.jpg' size={'24px'} />
        </IconButton>

        <IconButton className={style.miniButton}>
          <Icon.Down width={12} height={12} />
        </IconButton>
      </div>
    </header>
  );
}
