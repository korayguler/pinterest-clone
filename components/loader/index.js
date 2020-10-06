//style
import style from './style.module.scss';

//HELPERS
import classMerge from 'classnames';

const Button = ({ className, ...props }) => {
  return <div className={classMerge(style.loader, className)} {...props}></div>;
};

export default Button;
