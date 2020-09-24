import React, { useState } from 'react';
import styles from 'components/css/Pin.module.scss';
import MainButton from 'components/MainButton';
import ShareIcon from 'components/icons/Share';
import TreeDotIcon from 'components/icons/TreeDot';
import IconButton from 'components/IconButton';
import NewTabIcon from 'components/icons/NewTab';
import CircleImage from 'components/CircleImage';
import MiniProfile from 'components/MiniProfile';
import classMerge from 'classnames';
export default function Pin({
  href,
  image,
  title,
  userImage,
  userName,
  imageSize = 32,
  withDetails,
  withTitle,
  pinWith = 235,
  ...props
}) {
  const [show, showPinContent] = useState(false);
  let hrefRes = '';
  if (href.slice(0, 5) == 'https') hrefRes = href.slice(8, 20);
  else hrefRes = href.slice(7, 19);
  if (hrefRes.length > 11) hrefRes += '...';
  return (
    <>
      <div
        className={styles.pin}
        onMouseEnter={() => showPinContent(true)}
        onMouseLeave={() => showPinContent(false)}
      >
        <img src={image} />
        {show && (
          <div className={styles.content}>
            <MainButton className={styles.saveButton}>Kaydet</MainButton>
            <div className={styles.helpers}>
              {href && (
                <MainButton
                  className={classMerge(
                    styles.urlButton,
                    pinWith < 235 && styles.hidden,
                  )}
                  href={href}
                >
                  <NewTabIcon className={styles.newTabIcon} />
                  {hrefRes}
                </MainButton>
              )}
              <div className={styles.iconButtonsArea}>
                <IconButton className={styles.iconButtons}>
                  <ShareIcon />
                </IconButton>
                <IconButton className={styles.iconButtons}>
                  <TreeDotIcon />
                </IconButton>
              </div>
            </div>
          </div>
        )}
      </div>
      {withTitle && <h3 className={styles.title}>{title}</h3>}
      {withDetails && (
        <div className={styles.details}>
          <MiniProfile
            userImage={userImage}
            imageSize={32}
            userName={userName}
          />
        </div>
      )}
    </>
  );
}
