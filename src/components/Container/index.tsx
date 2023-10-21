import { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

type ContainerProps = {
  className?: string
  children: ReactNode
}

export function Container(props: ContainerProps) {
  return (
    <div className={classNames(styles.container, props.className)}>
      {props.children}
    </div>
  )
}
