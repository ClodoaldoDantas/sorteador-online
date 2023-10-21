'use client'

import { Center } from '@/components/Center'
import { Container } from '@/components/Container'
import { Gift, RotateCcw } from 'lucide-react'
import { Button } from '@/components/Button'

import styles from './page.module.scss'

export default function Resultado() {
  return (
    <Center>
      <Container className={styles.wrapper}>
        <h2 className={styles.title}>Resultado do Sorteio:</h2>

        <div className={styles.result}>
          <Gift size={24} />
          <span>Thaynara, Clodoaldo, Gael</span>
        </div>

        <Button>
          <RotateCcw size={20} /> Novo sorteio
        </Button>
      </Container>
    </Center>
  )
}
