import styles from 'components/css/Button.module.scss'
import classMerge from 'classnames'
import Link from 'next/link'

function BaseButton({ children, ...props }) {
  return (
    <button type='button' {...props}>
      {children}
    </button>
  )
}

function LinkButton({ children, href, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

function Button({ children, className, ...props }) {
  const Comp = props.href ? LinkButton : BaseButton
  return (
    <Comp className={classMerge(styles.btn, className)} {...props}>
      {children}
    </Comp>
  )
}

export default Button
