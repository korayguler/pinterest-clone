//STYLES
import style from './style.module.scss';
//MAIN COMPONENTS
import CircleImage from 'components/circle-image';
//HELPERS
import classMerge from 'classnames';
export default function MiniProfile(props) {
  return (
    <div className={classMerge(style.profile, props.className)}>
      <CircleImage src={props.userImage} size={props.imageSize} />
      <span className={classMerge(style.text, props.bold && style.boldText)}>
        {props.userName}
      </span>
    </div>
  );
}
