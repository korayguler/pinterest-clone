import Button from 'components/Button';
import styles from 'components/css/IconButton.module.scss';
import classMerge from 'classnames';
export default function IconButton({
  children,
  className,
  focused = true,
  hoverable = true,
  ...props
}) {
  return (
    <Button
      className={classMerge(
        styles.iconButton,
        focused && styles.focused,
        hoverable && styles.hoverable,
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
