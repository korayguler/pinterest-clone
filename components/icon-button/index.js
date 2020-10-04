//STYLES
import style from './style.module.scss';
//COMPONENTS
import Button from 'components/button';
//HELPERS
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
        style.iconButton,
        focused && style.focused,
        hoverable && style.hoverable,
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
