//STYLES
import style from './style.module.scss';
export default function CircleImage({ src, size }) {
  return (
    <img className={style.circleImage} src={src} style={{ width: size }} />
  );
}
