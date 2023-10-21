import { PropsWithChildren } from 'react'
import styles from './styles.module.scss'

export function Center(props: PropsWithChildren) {
  return <main className={styles.center}>{props.children}</main>
}
