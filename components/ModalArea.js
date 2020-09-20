import styles from 'components/css/ModalArea.module.scss';
import classMerge from 'classnames';

function Button({ children, className, ...props }) {
  return (
    <div className={classMerge(styles.modalArea, className)} {...props}>
      {children}
    </div>
  );
}

export default Button;
