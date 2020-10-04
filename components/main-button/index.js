//STYLES
import style from './style.module.scss';
//MAIN COMPONENTS
import Button from 'components/button';
//HELPERS
import classMerge from 'classnames';
export default function MainButton({
  children,
  selected = false,
  href,
  className,
  ...props
}) {
  return (
    <Button
      className={classMerge(
        style.mainButton,
        selected && style.selected,
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </Button>
  );
}
