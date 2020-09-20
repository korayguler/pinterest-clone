import Pin from 'components/Pin';
import styles from 'components/css/PinExtra.module.scss';
import CircleImage from 'components/CircleImage';
export default function PinExtra({
  title,
  href,
  image,
  username,
  userImage,
  imageSize,
}) {
  return (
    <div className={styles.pinExtra}>
      <Pin image={image} href={href} />
      <div className={styles.extra}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.user}>
          <CircleImage size={imageSize} src={userImage} />
          <span>{username}</span>
        </div>
      </div>
    </div>
  );
}
