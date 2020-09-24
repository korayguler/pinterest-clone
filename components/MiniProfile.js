import styles from 'components/css/MiniProfile.module.scss';
import CircleImage from 'components/CircleImage';
import classMerge from 'classnames';
export default function MiniProfile(props) {
  return (
    <div className={classMerge(styles.profile, props.className)}>
      <CircleImage src={props.userImage} size={props.imageSize} />
      <span className={classMerge(styles.text, props.bold && styles.boldText)}>
        {props.userName}
      </span>
    </div>
  );
}
