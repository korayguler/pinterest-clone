//REACT
import Link from 'next/link';
//style
import style from './style.module.scss';

//HELPERS
import classMerge from 'classnames';

function BaseButton({ children, ...props }) {
  return (
    <button type='button' {...props}>
      {children}
    </button>
  );
}

function LinkButton({ children, href, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

function Button({ children, className, ...props }) {
  const Comp = props.href ? LinkButton : BaseButton;
  return (
    <Comp className={classMerge(style.btn, className)} {...props}>
      {children}
    </Comp>
  );
}

export default Button;
