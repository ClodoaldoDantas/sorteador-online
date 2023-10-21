'use client'

import { useRouter } from 'next/navigation'
import { Image as ImageIcon, RotateCcw, Gift } from 'lucide-react'
import html2canvas from 'html2canvas'

import { Center } from '@/components/Center'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { useAppStore } from '@/store'

import styles from './page.module.scss'

export default function Resultado() {
  const router = useRouter()
  const result = useAppStore((state) => state.result)

  const handleBack = () => router.back()

  function downloadImage(image: string) {
    const link = document.createElement('a')

    link.setAttribute('href', image)
    link.setAttribute('download', 'resultado.png')
    link.style.display = 'none'

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)
  }

  async function handleTakeScreenshot() {
    const canvas = await html2canvas(document.body)
    const image = canvas.toDataURL('image/png')

    downloadImage(image)
  }

  return (
    <Center>
      <Container className={styles.wrapper}>
        <h2 className={styles.title}>Resultado do Sorteio:</h2>

        <div className={styles.result}>
          <Gift size={24} />
          <span>{result.join(', ')}</span>
        </div>

        <div className={styles.actions}>
          <Button onClick={handleBack}>
            <RotateCcw size={20} /> Novo sorteio
          </Button>

          <Button onClick={handleTakeScreenshot} data-type="secondary">
            <ImageIcon size={20} /> Capturar Tela
          </Button>
        </div>
      </Container>
    </Center>
  )
}
