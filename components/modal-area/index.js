//STYLES
import style from './style.module.scss';
//HELPERS
import classMerge from 'classnames';

function Button({ children, className, ...props }) {
  return (
    <div className={classMerge(style.modalArea, className)} {...props}>
      {children}
    </div>
  );
}

export default Button;
