import Pin from 'components/Pin'
import styles from 'components/css/DiscoverPin.module.scss'
export default function DiscoverPin(title, desc, href, image) {
  return (
    <div className={styles.discoverPin}>
      <Pin
        image='https://i.pinimg.com/236x/3e/2a/85/3e2a853e92d202f3993b287658598ffa.jpg'
        href='http://korayguler.com/'
      />
      <div className={styles.info}>
        <h3>{title}</h3>
        <div className={styles.user}></div>
      </div>
    </div>
  )
}
