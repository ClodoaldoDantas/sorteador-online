import { ComponentProps } from 'react'
import styles from './styles.module.scss'

type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return <textarea className={styles.textarea} {...props} />
}
