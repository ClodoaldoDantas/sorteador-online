import { ReactNode } from 'react'
import { ChevronLeft } from 'lucide-react'
import Link, { LinkProps } from 'next/link'

import styles from './styles.module.scss'

type BackButtonProps = LinkProps & {
  children: ReactNode
}

export function BackButton({ children, ...props }: BackButtonProps) {
  return (
    <Link className={styles.backButton} {...props}>
      <ChevronLeft size={24} />
      {children}
    </Link>
  )
}
