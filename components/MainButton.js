import Button from 'components/Button'
import styles from 'components/css/MainButton.module.scss'
import classMerge from 'classnames'
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
        styles.mainButton,
        selected && styles.selected,
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </Button>
  )
}
