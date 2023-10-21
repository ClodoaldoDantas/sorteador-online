'use client'

import { useRouter } from 'next/navigation'
import { Gift, RotateCcw } from 'lucide-react'

import { Center } from '@/components/Center'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { useAppStore } from '@/store'

import styles from './page.module.scss'

export default function Resultado() {
  const router = useRouter()
  const result = useAppStore((state) => state.result)

  const handleBack = () => router.back()

  return (
    <Center>
      <Container className={styles.wrapper}>
        <h2 className={styles.title}>Resultado do Sorteio:</h2>

        <div className={styles.result}>
          <Gift size={24} />
          <span>{result.join(', ')}</span>
        </div>

        <Button onClick={handleBack}>
          <RotateCcw size={20} /> Novo sorteio
        </Button>
      </Container>
    </Center>
  )
}
