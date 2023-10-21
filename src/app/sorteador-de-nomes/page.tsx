'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { Pointer } from 'lucide-react'

import { Center } from '@/components/Center'
import { Input } from '@/components/Input'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { BackButton } from '@/components/BackButton'
import { Textarea } from '@/components/Textarea'
import { getRandomInt } from '@/utils/get-random-int'
import { useAppStore } from '@/store'

import styles from './page.module.scss'

export default function SorteadorDeNomes() {
  const [quantity, setQuantity] = useState('1')
  const [field, setField] = useState('')

  const router = useRouter()
  const setResult = useAppStore((state) => state.setResult)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const names = field.split(',').map((name) => name.trim())
    const result: string[] = []

    while (result.length < Number(quantity)) {
      const name = names[getRandomInt(names.length)]

      if (!result.includes(name)) {
        result.push(name)
      }
    }

    setResult(result)
    router.push('/resultado')
  }

  return (
    <Center>
      <Container>
        <header className={styles.header}>
          <BackButton href="/">Voltar para página inicial</BackButton>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Sortear</h2>

          <div className={styles.flex}>
            <Input
              type="number"
              min={1}
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <span>item da lista abaixo:</span>
          </div>

          <div className={styles.group}>
            <Textarea
              placeholder="Escreva aqui os nomes que gostaria de sortear, separados por vírgula."
              required
              value={field}
              onChange={(e) => setField(e.target.value)}
            />
          </div>

          <Button type="submit">
            <Pointer size={20} />
            Sortear agora
          </Button>
        </form>
      </Container>
    </Center>
  )
}
