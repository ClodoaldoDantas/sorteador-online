import Link from 'next/link'
import { Calculator, User2 } from 'lucide-react'
import { Container } from '@/components/Container'
import { Center } from '@/components/Center'
import styles from './page.module.scss'

export default function Home() {
  return (
    <Center>
      <Container className={styles.grid}>
        <Link href="/sorteador-de-numeros">
          <div className={styles.card}>
            <Calculator size={40} />

            <strong>Sorteador de números</strong>
            <p>
              Sorteie números de forma fácil e rápida com nosso gerador de
              números online. Experimente a sorte agora!
            </p>
          </div>
        </Link>

        <Link href="/sorteador-de-nomes">
          <div className={styles.card}>
            <User2 size={40} />

            <strong>Sorteador de nomes</strong>
            <p>
              Sorteie nomes de forma fácil e rápida com nosso sorteio online de
              nomes. Perfeito para decisões imparciais e aleatórias!
            </p>
          </div>
        </Link>
      </Container>
    </Center>
  )
}
